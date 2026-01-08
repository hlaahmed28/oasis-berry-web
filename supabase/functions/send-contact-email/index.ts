import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string
  email: string
  company: string
  country: string
  message: string
}

const TARGET_EMAILS = [
  'Mohamed.fahmy@strawberryoasis.com',
  'ahmedelafifi@strawberryoasis.com'
]

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, company, country, message }: ContactFormData = await req.json()

    console.log('Received contact form submission:', { name, email, company, country })

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields')
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Email content
    const emailHtml = `
      <h2>New Contact Form Submission - Strawberry Oasis</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Country:</strong> ${country || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>This email was sent from the Strawberry Oasis contact form.</small></p>
    `

    // Send email using Resend
    if (RESEND_API_KEY) {
      console.log('Sending email to:', TARGET_EMAILS)
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Strawberry Oasis <onboarding@resend.dev>',
          to: TARGET_EMAILS,
          subject: `New Contact Form Submission from ${name}`,
          html: emailHtml,
          reply_to: email,
        }),
      })

      if (!res.ok) {
        const error = await res.text()
        console.error('Resend API error:', error)
        throw new Error('Failed to send email via Resend')
      }
      
      console.log('Email sent successfully')
    } else {
      console.log('RESEND_API_KEY not configured, skipping email send')
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})