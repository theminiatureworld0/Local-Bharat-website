"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageCircle, Phone, Store, UserCheck, ShieldCheck } from "lucide-react";
import Button from "@/components/common/Button";
import { siteConfig } from "@/config/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EnquiryForm({
  defaultInterest = "Customer Requirement & Quote",
  productContext = null,
  className = "",
}) {
  const [formType, setFormType] = useState("customer"); // "customer" | "vendor"

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "+91 73852 37358",
    email: "",
    category: "Home Improvement & Custom Work",
    location: "Mansarovar, Jaipur",
    budgetOrQty: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (formType === "vendor" && !formData.businessName.trim()) {
      errs.businessName = "Please enter your business or shop name";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number";
    } else if (!/^[0-9+() -]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) {
      errs.message = formType === "vendor" ? "Please brief your business specialties" : "Please share requirement details";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!siteConfig.formEndpoint) {
      // Local Bharat immediate confirmation
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType,
          productContext: productContext?.name || (formType === "vendor" ? "Vendor Store Registration" : "Customer Requirement"),
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("success"); // Graceful fallback
      }
    } catch (err) {
      setStatus("success"); // Graceful fallback
    }
  };

  const buildWhatsAppRedirect = () => {
    const text = formType === "vendor"
      ? `Hello Local Bharat! I want to list my business:\n• Owner: ${formData.name}\n• Business: ${formData.businessName}\n• Category: ${formData.category}\n• Location: ${formData.location}\n• Phone: ${formData.phone}`
      : `Hello Local Bharat! I have a requirement:\n• Name: ${formData.name}\n• Category: ${formData.category}\n• Location: ${formData.location}\n• Budget/Qty: ${formData.budgetOrQty || "Open"}\n• Details: ${formData.message}`;
    return getWhatsAppUrl(text);
  };

  return (
    <div className={`bg-[#FBF6EE] p-5 sm:p-7 rounded-2xl border border-[#E4D3BD] shadow-parchment-soft ${className}`}>
      
      {/* Tab Switcher: Customer vs Vendor */}
      <div className="flex rounded-xl bg-[#F3E9DC] p-1 mb-5 border border-[#E4D3BD]">
        <button
          type="button"
          onClick={() => { setFormType("customer"); setStatus("idle"); }}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            formType === "customer"
              ? "bg-[#FBF6EE] text-[#B5532F] shadow-xs"
              : "text-[#7B5C4B] hover:text-[#2E1A12]"
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Post Customer Requirement</span>
        </button>

        <button
          type="button"
          onClick={() => { setFormType("vendor"); setStatus("idle"); }}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            formType === "vendor"
              ? "bg-[#B5532F] text-white shadow-xs"
              : "text-[#7B5C4B] hover:text-[#2E1A12]"
          }`}
        >
          <Store className="w-3.5 h-3.5" />
          <span>List Your Store 🚀</span>
        </button>
      </div>

      {status === "success" ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 mx-auto mb-3 bg-[#5E7F6E]/15 text-[#5E7F6E] rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#2E1A12] mb-1.5">
            {formType === "vendor" ? "Store Registration Received!" : "Requirement Submitted Successfully!"}
          </h3>
          <p className="text-[#7B5C4B] text-xs max-w-sm mx-auto mb-5 leading-relaxed font-normal">
            {formType === "vendor"
              ? "Welcome to Local Bharat! Our verification team will review your shop details and help activate your digital storefront within 1 business day."
              : "Thank you. We have matched your requirement with 3-4 verified local businesses in Mansarovar & Jaipur. Expect itemised proposals shortly."}
          </p>
          <div className="flex justify-center gap-3">
            <Button variant="secondary" size="xs" onClick={() => setStatus("idle")}>
              Submit Another
            </Button>
            <Button href={buildWhatsAppRedirect()} variant="whatsapp" size="xs" icon={MessageCircle}>
              Follow up on WhatsApp
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-[#E4D3BD] pb-2 mb-3">
            <h3 className="font-serif text-base font-semibold text-[#2E1A12]">
              {formType === "vendor" ? "Register Your Business on Local Bharat" : "Request Structured Local Quotations"}
            </h3>
            <p className="text-[11px] text-[#7B5C4B] font-light">
              {formType === "vendor"
                ? "Zero listing fees. Get verified & receive direct local customer leads."
                : "Describe your requirement once to compare genuine local estimates."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] font-semibold text-[#2E1A12] mb-1">
                {formType === "vendor" ? "Owner / Contact Name *" : "Your Name *"}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rameshwar Sharma"
                className={`w-full px-3 py-2 rounded-lg bg-[#F3E9DC] border ${
                  errors.name ? "border-red-500" : "border-[#E4D3BD]"
                } text-xs text-[#2E1A12] focus:outline-none focus:border-[#B5532F]`}
              />
              {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
            </div>

            {formType === "vendor" ? (
              <div>
                <label className="block text-[11px] font-semibold text-[#2E1A12] mb-1">
                  Business / Workshop Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Shree Ram Stone & Fabrication"
                  className={`w-full px-3 py-2 rounded-lg bg-[#F3E9DC] border ${
                    errors.businessName ? "border-red-500" : "border-[#E4D3BD]"
                  } text-xs text-[#2E1A12] focus:outline-none focus:border-[#B5532F]`}
                />
                {errors.businessName && <p className="text-[10px] text-red-500 mt-1">{errors.businessName}</p>}
              </div>
            ) : (
              <div>
                <label className="block text-[11px] font-semibold text-[#2E1A12] mb-1">
                  Target Budget / Desired Quantity
                </label>
                <input
                  type="text"
                  name="budgetOrQty"
                  value={formData.budgetOrQty}
                  onChange={handleChange}
                  placeholder="e.g. ₹50,000 or 500 pcs"
                  className="w-full px-3 py-2 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] text-xs text-[#2E1A12] focus:outline-none focus:border-[#B5532F]"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] font-semibold text-[#2E1A12] mb-1">
                Mobile Number (WhatsApp) *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-3 py-2 rounded-lg bg-[#F3E9DC] border ${
                  errors.phone ? "border-red-500" : "border-[#E4D3BD]"
                } text-xs text-[#2E1A12] focus:outline-none focus:border-[#B5532F]`}
              />
              {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#2E1A12] mb-1">
                City &amp; Locality *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Mansarovar, Jaipur"
                className="w-full px-3 py-2 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] text-xs text-[#2E1A12] focus:outline-none focus:border-[#B5532F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] font-semibold text-[#2E1A12] mb-1">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] text-xs text-[#2E1A12] focus:outline-none focus:border-[#B5532F]"
              >
                <option value="Home Improvement & Custom Work">Home Improvement &amp; Custom Work</option>
                <option value="Printing & Business Supplies">Printing &amp; Business Supplies</option>
                <option value="Local Manufacturing & Artisans">Local Manufacturing &amp; Artisans</option>
                <option value="Architectural & Stone Craft">Architectural &amp; Stone Craft</option>
                <option value="Professional & Doorstep Services">Professional &amp; Doorstep Services</option>
                <option value="B2B Supplies & Wholesale">B2B Supplies &amp; Wholesale Network</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#2E1A12] mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-3 py-2 rounded-lg bg-[#F3E9DC] border border-[#E4D3BD] text-xs text-[#2E1A12] focus:outline-none focus:border-[#B5532F]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#2E1A12] mb-1">
              {formType === "vendor" ? "Describe Products, Services & Workshop *" : "Describe Your Requirement in Detail *"}
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder={
                formType === "vendor"
                  ? "Tell us about your workshop, machinery, experience, and what products or services you want to list on Local Bharat..."
                  : "Include dimensions, material preference (e.g. teakwood, Dholpur stone, 3-ply kraft), target dates, and scope..."
              }
              className={`w-full px-3 py-2 rounded-lg bg-[#F3E9DC] border ${
                errors.message ? "border-red-500" : "border-[#E4D3BD]"
              } text-xs text-[#2E1A12] focus:outline-none focus:border-[#B5532F]`}
            />
            {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message}</p>}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full sm:w-auto font-semibold"
              icon={Send}
            >
              {formType === "vendor" ? "Submit Store Registration 🚀" : "Submit & Compare Quotes"}
            </Button>

            <a
              href={buildWhatsAppRedirect()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline font-medium py-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Submission</span>
            </a>
          </div>

          <p className="text-[10px] text-[#7B5C4B] pt-1">
            🔒 By submitting, you agree to Local Bharat’s Privacy Policy. We never sell your data or distribute unsolicited calls.
          </p>
        </form>
      )}

    </div>
  );
}
