"use client";

import { useState } from "react";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

// TypeScript type for HighLevel webhook payload
interface HighLevelPayload {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  serviceInterest: string;
  message: string;
  source: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    services: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const services = checked
        ? [...prev.services, value]
        : prev.services.filter((s) => s !== value);
      return { ...prev, services };
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Prepare payload for HighLevel webhook
    const webhookUrl = process.env.NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL;

    // Map propertyType to a more readable format
    const propertyTypeMap: Record<string, string> = {
      homeowner: "Homeowner",
      "property-manager": "Property Manager",
      retailer: "Retailer",
      other: "Other",
    };

    const payload: HighLevelPayload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      propertyType: formData.propertyType
        ? propertyTypeMap[formData.propertyType] || formData.propertyType
        : "",
      serviceInterest: formData.services.join(", ") || "Not specified",
      message: formData.message,
      source: "Turner Installs Website",
    };

    // If HighLevel webhook URL is configured, send to HighLevel
    // Otherwise, just log to console (for development)
    if (webhookUrl) {
      try {
        /**
         * HighLevel Webhook Integration
         *
         * Configure this URL in HighLevel by creating an Inbound Webhook or Form integration:
         * 1. Log into your HighLevel account
         * 2. Navigate to Automations → Webhooks (or the appropriate Form/Workflow section)
         * 3. Create a new Inbound Webhook
         * 4. Copy the webhook URL
         * 5. Paste it into NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL in your .env.local file
         */
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Success - show thank you message
        setSubmitted(true);
      } catch (error) {
        // Log error for debugging
        console.error("Error submitting form to HighLevel:", error);
        setSubmitError(
          "We're sorry, there was an error submitting your enquiry. Please try calling us directly or emailing us."
        );
        setIsSubmitting(false);
      }
    } else {
      // No webhook URL configured - log to console for development
      console.log("Form submission (HighLevel webhook not configured):", payload);
      console.log(
        "To enable HighLevel integration, set NEXT_PUBLIC_GHL_FORM_WEBHOOK_URL in .env.local"
      );
      // Still show success message in development
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <Section>
        <div className="max-w-2xl mx-auto text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-sm text-gray-400 mb-6">
            We've received your message and will be in touch shortly.
          </p>
          <CTAButton href="/">Return Home</CTAButton>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-yellow-400">Touch</span>
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mb-6">
          Ready to start your flooring project? Get in touch today for a quote or site visit. We're here
          to help you achieve the perfect floor.
        </p>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-lg uppercase tracking-wider mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
                <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Phone</div>
                <div className="text-sm mb-2">
                  <a href="tel:0748022388" className="text-yellow-400 hover:text-yellow-300">
                    07 4802 2388
                  </a>{" "}
                  <span className="text-xs text-gray-400">(Reception)</span>
                </div>
                <div className="text-sm">
                  <a href="tel:0413592054" className="text-yellow-400 hover:text-yellow-300">
                    0413 592 054
                  </a>{" "}
                  <span className="text-xs text-gray-400">(Liam Direct)</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
                <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Email</div>
                <div className="text-sm">
                  <a
                    href="mailto:liam@turnerinstalls.com.au"
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    liam@turnerinstalls.com.au
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
                <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                  Operating Hours
                </div>
                <div className="text-sm">7am - 5pm, Monday to Friday</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 via-black to-black rounded-2xl border border-gray-800 p-5">
                <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Service Area</div>
                <div className="text-sm">Brisbane, Ipswich & surrounding suburbs</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-lg uppercase tracking-wider mb-6">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs text-gray-400 mb-1">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                  required
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-gray-400 mb-1">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                  required
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs text-gray-400 mb-1">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                  required
                />
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-xs text-gray-400 mb-1">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="homeowner">Homeowner</option>
                  <option value="property-manager">Property Manager</option>
                  <option value="retailer">Retailer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-2">Services Interested In</label>
                <div className="space-y-2">
                  {[
                    "Vinyl plank installs",
                    "Timber & laminate installs",
                    "Hybrid flooring installs",
                    "Commercial plank installs",
                    "Floor preparation & levelling",
                    "Removal & disposal",
                  ].map((service) => (
                    <label key={service} className="flex items-center gap-2 text-xs text-gray-400">
                      <input
                        type="checkbox"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleServiceChange}
                        className="w-4 h-4 bg-gray-900 border-gray-800 rounded focus:ring-yellow-400"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-gray-400 mb-1">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  required
                ></textarea>
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              {submitError && (
                <div className="bg-red-900/20 border border-red-800 rounded-lg p-3 text-xs text-red-400">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-full border border-yellow-400 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-500 text-black text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}

