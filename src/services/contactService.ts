
import { supabase } from "@/integrations/supabase/client";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  country: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    // Save to database first
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([formData]);

    if (dbError) {
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Submit to Supabase Edge Function that will handle email sending
    const response = await supabase.functions.invoke('send-contact-email', {
      body: formData,
    });

    if (response.error) {
      console.error('Edge function error:', response.error);
      // Don't throw - form was saved to database successfully
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
