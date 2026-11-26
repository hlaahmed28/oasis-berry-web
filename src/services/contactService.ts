export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  country: string;
  message: string;
  /** Hidden honeypot field for spam protection */
  website?: string;
}

const PRIMARY_RECIPIENT = "ahmedelafifi@strawberryoasis.com";
const CC_RECIPIENT = "Mohamed.fahmy@strawberryoasis.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${PRIMARY_RECIPIENT}`;

export const submitContactForm = async (formData: ContactFormData) => {
  // Silently ignore bot submissions that fill the hidden honeypot field
  if (formData.website) {
    return {
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
    };
  }

  const subject = `New Export Inquiry from ${formData.name}${
    formData.company ? ` (${formData.company})` : ""
  }`;

  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      company: formData.company || "Not provided",
      country: formData.country || "Not provided",
      message: formData.message,
      _subject: subject,
      _cc: CC_RECIPIENT,
      _replyto: formData.email,
      _template: "table",
      _captcha: "false",
      _honey: "",
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || (data.success !== true && data.success !== "true")) {
    throw new Error(
      data.message ||
        "Unable to send your message right now. Please try again or email us directly."
    );
  }

  return {
    success: true,
    message:
      "Your inquiry has been sent to our export team. We'll respond within 24 hours.",
  };
};
