import React from 'react';

/**
 * Email Template Component
 * Used by Resend to send formatted HTML emails
 * Receives contact form data and renders professional email
 */
interface EmailTemplateProps {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  fullName,
  email,
  subject,
  message,
}) => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        padding: '20px',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: '#222',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ color: '#fff', margin: '0', fontSize: '24px' }}>
            New Portfolio Inquiry
          </h1>
          <p style={{ color: '#aaa', margin: '10px 0 0 0', fontSize: '14px' }}>
            From {fullName}
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '30px' }}>
          {/* Sender Info */}
          <div
            style={{
              backgroundColor: '#f9f9f9',
              padding: '15px',
              borderRadius: '4px',
              marginBottom: '20px',
              borderLeft: '4px solid #ff8c00',
            }}
          >
            <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
              <strong>From:</strong> {fullName}
            </p>
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#666' }}>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${email}`} style={{ color: '#ff8c00' }}>
                {email}
              </a>
            </p>
          </div>

          {/* Subject */}
          <div style={{ marginBottom: '20px' }}>
            <h2
              style={{
                color: '#222',
                fontSize: '16px',
                margin: '0 0 10px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {subject}
            </h2>
          </div>

          {/* Message */}
          <div
            style={{
              lineHeight: '1.6',
              color: '#333',
              fontSize: '14px',
              backgroundColor: '#fafafa',
              padding: '20px',
              borderRadius: '4px',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}
          >
            {message}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: '#f5f5f5',
            padding: '20px 30px',
            borderTop: '1px solid #eee',
            textAlign: 'center',
            fontSize: '12px',
            color: '#999',
          }}
        >
          <p style={{ margin: '0' }}>
            This message was sent from your portfolio website contact form.
          </p>
          <p style={{ margin: '5px 0 0 0' }}>
            (c) {new Date().getFullYear()} Nathaniel Patrick. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
