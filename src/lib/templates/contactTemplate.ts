// lib/templates/contactTemplate.ts
export function contactTemplate(name: string, message: string) {
    return `
      <div style="font-family: sans-serif; color: #333;">
        <h2>Hi ${name},</h2>
        <p>Thanks for contacting us! Here's what you sent:</p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
          ${message}
        </blockquote>
        <p>We’ll get back to you shortly.</p>
        <hr />
        <p style="font-size: 12px; color: #777;">This is an automated email from our contact form.</p>
      </div>
    `;
  }
  