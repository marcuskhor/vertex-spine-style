import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  type: "contact" | "appointment";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject?: string;
  message?: string;
  service?: string;
  date?: string;
  time?: string;
  reason?: string;
  insurance?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    console.log("Received email request:", { type: data.type, email: data.email });

    let emailHtml = "";
    let emailSubject = "";

    if (data.type === "contact") {
      emailSubject = `New Contact Form Submission${data.subject ? `: ${data.subject}` : ""}`;
      emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        ${data.service ? `<p><strong>Service Interested In:</strong> ${data.service}</p>` : ""}
        ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ""}
        ${data.message ? `<p><strong>Message:</strong></p><p>${data.message.replace(/\n/g, "<br>")}</p>` : ""}
      `;
    } else {
      emailSubject = `New Appointment Request - ${data.firstName} ${data.lastName}`;
      emailHtml = `
        <h2>New Appointment Request</h2>
        <h3>Patient Information</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        
        <h3>Appointment Details</h3>
        ${data.service ? `<p><strong>Service:</strong> ${data.service}</p>` : ""}
        ${data.date ? `<p><strong>Preferred Date:</strong> ${data.date}</p>` : ""}
        ${data.time ? `<p><strong>Preferred Time:</strong> ${data.time}</p>` : ""}
        ${data.reason ? `<p><strong>Reason for Visit:</strong></p><p>${data.reason.replace(/\n/g, "<br>")}</p>` : ""}
        ${data.insurance ? `<p><strong>Insurance Provider:</strong> ${data.insurance}</p>` : ""}
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Vertex Chiropractic <onboarding@resend.dev>",
      to: ["m.khor@hotmail.com"],
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
