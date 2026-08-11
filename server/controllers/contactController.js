import { Resend } from "resend";

export const handleContactSubmit = async (req, res) => {
  const { name, email, subject, message } = req.body;
  const errors = {};

  // Server-side validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !name.trim()) errors.name = "Name is required.";
  if (!email || !email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!subject || !subject.trim()) errors.subject = "Subject is required.";
  if (!message || !message.trim()) {
    errors.message = "Message is required.";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors
    });
  }

  // Check if Resend environment parameters are available
  const canSendEmail = process.env.RESEND_API_KEY && process.env.EMAIL_TO;

  if (canSendEmail) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM || "onboarding@resend.dev",
        to: process.env.EMAIL_TO,
        subject: `Portfolio Contact: ${subject}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>New Portfolio Contact Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line; background-color: #f1f5f9; padding: 12px; border-radius: 6px;">${message}</p>
        `,
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log(`[MAIL] Message from ${name} sent successfully via Resend. ID: ${data?.id}`);

      return res.status(200).json({
        success: true,
        message: "Your message has been sent successfully!"
      });
    } catch (err) {
      console.error("[MAIL ERROR] Failed to send email via Resend:", err.message);
      // Fall through to console fallback if Resend fails
    }
  }

  // Developer Fallback: Log message to the console in a clean format
  console.log("\n==================================================");
  console.log("       [DEV FALLBACK] NEW CONTACT SUBMISSION      ");
  console.log("==================================================");
  console.log(`Name:    ${name}`);
  console.log(`Email:   ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log("==================================================\n");

  return res.status(200).json({
    success: true,
    message: "Message received! (Dev mock simulation successful)",
    logged: true
  });
};
