import { z } from 'zod';

/**
 * Contact Form Schema
 * Validates client-side and server-side contact form submissions
 * Includes rate limiting and honeypot spam prevention
 */
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Full name contains invalid characters'),

  email: z
    .string()
    .email('Invalid email address')
    .max(254, 'Email must not exceed 254 characters')
    .toLowerCase()
    .trim(),

  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must not exceed 200 characters')
    .trim(),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must not exceed 5000 characters')
    .trim(),

  // Honeypot field - should always be empty
  phoneNumber: z.string().optional().default(''),

  // Timestamp for rate limiting verification
  timestamp: z.number().optional(),
});

/**
 * Contact Form Response Schema
 * Validates API responses for type safety
 */
export const contactFormResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z
    .object({
      id: z.string().optional(),
      emailSent: z.boolean().optional(),
      smsSent: z.boolean().optional(),
      timestamp: z.string().optional(),
    })
    .optional(),
  error: z.string().optional(),
});

/**
 * Type Exports - Inferred from Zod schemas
 * Provides type safety across the application
 */
export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type ContactFormResponse = z.infer<typeof contactFormResponseSchema>;

/**
 * Validation helper function
 * Validates contact form data safely
 */
export function validateContactForm(
  data: unknown
): { success: boolean; data?: ContactFormInput; errors?: Record<string, string> } {
  try {
    const validated = contactFormSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.flatten().fieldErrors;
      return {
        success: false,
        errors: Object.entries(errors).reduce(
          (acc, [key, messages]) => {
            acc[key] = messages?.[0] || 'Validation error';
            return acc;
          },
          {} as Record<string, string>
        ),
      };
    }
    return { success: false, errors: { general: 'Validation failed' } };
  }
}
