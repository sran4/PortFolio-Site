import { useEffect, useState } from "react";
import { ABOUT_ME } from "../utils/data";
import ContactInfoCard from "../components/ContactInfoCard";
import {
  ObfuscatedEmail,
  ObfuscatedPhone,
} from "../components/ObfuscatedContact";
import { MdOutlineWeb } from "react-icons/md";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // "", "success", "error"
  const [formStartAt, setFormStartAt] = useState(Date.now());

  useEffect(() => {
    setFormStartAt(Date.now());
  }, []);

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
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus("");

    // Anti-spam: honeypot and minimum fill time
    const honeypotValue = e.target?.company?.value?.trim?.() || "";
    const timeSinceOpenMs = Date.now() - formStartAt;
    if (honeypotValue || timeSinceOpenMs < 1500) {
      // Silently accept without sending to avoid tipping off bots
      setSubmitStatus("success");
      setIsSubmitting(false);
      // Reset visible fields
      setFormData({ from_name: "", from_email: "", message: "" });
      e.target.reset?.();
      return;
    }

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
            Full-stack problem solver with strong expertise in modern
            technologies and frameworks, passionate about crafting scalable,
            efficient, and seamless digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 mt-16">
          <div>
            <ObfuscatedEmail />
            <ObfuscatedPhone />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.location} />
          </div>

          <div>
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
              Contact Form
            </h5>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-500 text-green-700 dark:text-green-300 rounded">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-500 text-red-700 dark:text-red-300 rounded">
                ❌ Failed to send message. Please try again or contact me
                directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Honeypot field (hidden from users; bots may fill it) */}
              <input
                type="text"
                name="company"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
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
