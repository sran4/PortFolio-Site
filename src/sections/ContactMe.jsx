import React, { useState } from "react";
import { ABOUT_ME } from "../utils/data";
import ContactInfoCard from "../components/ContactInfoCard";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // "", "success", "error"

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Debug: Log form data
    console.log("Form data being sent:", formData);

    try {
      // Import EmailJS dynamically to avoid SSR issues
      const emailjs = await import("@emailjs/browser");

      // Initialize EmailJS with your User ID
      emailjs.init("3opCAw0PpC7ybpFre"); // Replace with your actual EmailJS User ID from dashboard

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        "service_cd0vfps", // Your Service ID
        "template_9mk8w5g", // Your Template ID
        e.target,
        "3opCAw0PpC7ybpFre" // Your EmailJS User ID
      );

      console.log("Email sent successfully!", result.text);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>

          <p className="text-sm text-center mt-4 leading-6">
            A versatile developer with hands-on expertise in modern
            technologies, tools, and frameworks, dedicated to building
            efficient, scalable, and user-centric solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard
              icon={<IoPhonePortraitOutline />}
              text={ABOUT_ME.phone}
            />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.location} />
          </div>

          <div>
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
              Contact Form
            </h5>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                ❌ Failed to send message. Please try again or contact me
                directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                value={formData.from_name}
                onChange={handleChange}
                className="input-box"
                autoComplete="off"
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email"
                value={formData.from_email}
                onChange={handleChange}
                className="input-box"
                autoComplete="off"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="input-box"
                autoComplete="off"
                required
              />

              <button
                type="submit"
                className={`action-btn btn-scale-anim ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
//template id:template_ythbnf9
// template id:template_9mk8w5g
// gmail id:sransatwant@gmail.com
//service id:service_cd0vfps
// gmail password
// ujka wkou psna utji
