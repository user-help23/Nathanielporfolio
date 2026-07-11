/**
 * Utility Functions for API and Client Operations
 * Includes rate limiting, IP tracking, and sanitization helpers
 */

/**
 * Simple in-memory rate limiter
 * In production, use Redis or similar for distributed rate limiting
 */
const rateLimitStore = new Map<string, number[]>();

/**
 * Check if request exceeds rate limit
 * @param identifier - IP address or user identifier
 * @param maxRequests - Maximum requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns boolean - true if request is allowed, false if rate limited
 */
export function checkRateLimit(
  identifier: string,
  maxRequests: number = 3,
  windowMs: number = 5 * 60 * 1000
): boolean {
  const now = Date.now();
  const userRequests = rateLimitStore.get(identifier) || [];

  // Remove old requests outside the window
  const recentRequests = userRequests.filter((time) => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return false; // Rate limited
  }

  // Add current request
  recentRequests.push(now);
  rateLimitStore.set(identifier, recentRequests);

  return true; // Request allowed
}

/**
 * Get remaining requests for a given identifier
 * @param identifier - IP address or user identifier
 * @param maxRequests - Maximum requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns number - Remaining requests
 */
export function getRemainingRequests(
  identifier: string,
  maxRequests: number = 3,
  windowMs: number = 5 * 60 * 1000
): number {
  const now = Date.now();
  const userRequests = rateLimitStore.get(identifier) || [];
  const recentRequests = userRequests.filter((time) => now - time < windowMs);
  return Math.max(0, maxRequests - recentRequests.length);
}

/**
 * Sanitize user input to prevent XSS attacks
 * @param input - User input string
 * @returns string - Sanitized string
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate honeypot field
 * If honeypot field (phoneNumber) has a value, it's likely a bot
 * @param honeypotValue - Value of honeypot field
 * @returns boolean - true if valid (empty), false if likely bot
 */
export function validateHoneypot(honeypotValue: string): boolean {
  return !honeypotValue || honeypotValue.trim().length === 0;
}

/**
 * Get client IP address from request headers
 * @param request - Next.js request object
 * @returns string - Client IP address
 */
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return (forwarded?.split(',')[0] || request.headers.get('x-real-ip') || 'unknown').trim();
}

/**
 * Truncate text to specified length
 * @param text - Text to truncate
 * @param length - Maximum length
 * @returns string - Truncated text with ellipsis
 */
export function truncateText(text: string, length: number = 150): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

/**
 * Format phone number for display
 * @param phone - Phone number string
 * @returns string - Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  if (cleaned.length === 11) {
    return `+${cleaned}`;
  }
  return phone;
}

/**
 * Validate email format
 * @param email - Email string
 * @returns boolean - true if valid email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
