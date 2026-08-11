import nodemailer from "nodemailer";

export const handleContactSubmit = async (req, res) => {
  const { name, email, subject, message } = req.body;
  const errors = {};

  // Server-side validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !name.trim()) {
    errors.name = "Name is required.";
  }

  if (!email || !email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!subject || !subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!message || !message.trim()) {
    errors.message = "Message is required.";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors,
    });
  }

  // Check SMTP configuration
  const {
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_TO,
    EMAIL_SMTP_HOST,
    EMAIL_SMTP_PORT,
  } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
    console.error("[MAIL ERROR] Email environment variables are missing.");

    return res.status(500).json({
      success: false,
      message: "Email service is not configured on the server.",
    });
  }

  try {
    const port = parseInt(EMAIL_SMTP_PORT || "465", 10);

    const transporter = nodemailer.createTransport({
      host: EMAIL_SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Verify SMTP connection before sending
    await transporter.verify();

    const mailOptions = {
      from: `"${name}" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,

      text: `
New Portfolio Contact Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>New Portfolio Contact Submission</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Subject:</strong> ${subject}
          </p>

          <hr />

          <p>
            <strong>Message:</strong>
          </p>

          <div style="
            background-color: #f1f5f9;
            padding: 15px;
            border-radius: 8px;
            white-space: pre-line;
          ">
            ${message}
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(
      `[MAIL] Email sent successfully. Message ID: ${info.messageId}`
    );

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (err) {
    console.error("[MAIL ERROR]", err);

    return res.status(500).json({
      success: false,
      message: "Unable to send email. Please try again later.",
    });
  }
};
