
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  country: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  // This will be updated to use Supabase once connected
  // For now, we'll simulate an API call
  
  console.log("Contact form submission:", formData);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In production with Supabase, this would:
  // 1. Insert the form data into a contacts table
  // 2. Send email notifications to ahmedelafifi@strawberryoasis.com and Mohamed.fahmy@strawberryoasis.com
  // 3. Send an auto-reply to the customer
  
  return {
    success: true,
    message: "Your message has been received. We'll get back to you within 24 hours."
  };
};
