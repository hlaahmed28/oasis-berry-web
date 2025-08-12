
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  country: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    // Submit to Supabase Edge Function that will handle email sending
    const response = await fetch('/api/send-contact-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        targetEmail: 'hlaahmedkamal@gmail.com'
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Failed to send message');
    }

    return {
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours."
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to send message. Please try again or contact us directly.');
  }
};
