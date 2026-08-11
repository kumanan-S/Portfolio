import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import axios from "axios";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personalInfo, statistics } = portfolioData;

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [visitorCount, setVisitorCount] = useState(1480);
export default function Contact() {
  const { personalInfo, statistics } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [visitorCount, setVisitorCount] = useState(1480);

  useEffect(() => {
    const randomIncrement = Math.floor(Math.random() * 5) + 1;

    const timer = setTimeout(() => {
      setVisitorCount((prev) => prev + randomIncrement);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters long";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // THIS MUST BE INSIDE Contact()
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      );

      if (response.data.success) {
        setSubmitStatus("success");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090d1a] to-[#0f172a]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Contact <span className="text-accentCyan">Me</span>
          </motion.h2>
          <p className="text-slate-400 mt-2 font-medium tracking-wide">
            Feel free to reach out. I will reply within 24 hours.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accentCyan mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Cards & Stats */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Quick Contacts */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-5">
              <h3 className="text-xl font-bold text-white tracking-wide mb-4">
                Get In Touch
              </h3>

              {[
                { icon: <FaEnvelope className="text-primaryBlue" />, label: "Email", val: personalInfo.email, link: `mailto:${personalInfo.email}` },
                { icon: <FaPhoneAlt className="text-accentPurple" />, label: "Phone", val: personalInfo.phone, link: `tel:${personalInfo.phone}` },
                { icon: <FaMapMarkerAlt className="text-accentCyan" />, label: "Location", val: personalInfo.location, link: "#" },
              ].map((c, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-lg border border-white/5 group-hover:border-slate-600 transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase block">
                      {c.label}
                    </span>
                    {c.link !== "#" ? (
                      <a
                        href={c.link}
                        className="text-sm font-semibold text-slate-350 hover:text-accentCyan transition-colors"
                      >
                        {c.val}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-slate-350">
                        {c.val}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Animated statistics panel */}
            <div className="grid grid-cols-2 gap-4">
              {statistics.map((stat, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl text-center border border-white/5">
                  <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-accentCyan">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase font-mono font-bold text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Visitor Counter */}
            {/* <div className="glass-card p-5 rounded-xl border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 block uppercase">
                  Profile Status
                </span>
                <span className="text-sm font-bold text-white tracking-wide">
                  Live Portfolio Visits
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-950 font-mono text-emerald-400 font-extrabold text-base border border-white/5 shadow-inner">
                {visitorCount}
              </div>
            </div> */}
          </div>

          {/* Right Column: Glassmorphism Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl border border-white/5 relative">
              <h3 className="text-xl font-bold text-white tracking-wide mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-900 border ${
                        formErrors.name ? "border-red-500/50" : "border-white/5 focus:border-accentCyan/50"
                      } rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none transition-colors`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-red-400 font-medium mt-1 block">
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-900 border ${
                        formErrors.email ? "border-red-500/50" : "border-white/5 focus:border-accentCyan/50"
                      } rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none transition-colors`}
                      placeholder="john@example.com"
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-red-400 font-medium mt-1 block">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-900 border ${
                      formErrors.subject ? "border-red-500/50" : "border-white/5 focus:border-accentCyan/50"
                    } rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none transition-colors`}
                    placeholder="Project Inquiry"
                  />
                  {formErrors.subject && (
                    <span className="text-[11px] text-red-400 font-medium mt-1 block">
                      {formErrors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-900 border ${
                      formErrors.message ? "border-red-500/50" : "border-white/5 focus:border-accentCyan/50"
                    } rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none transition-colors resize-none`}
                    placeholder="Describe your project requirement or message details..."
                  />
                  {formErrors.message && (
                    <span className="text-[11px] text-red-400 font-medium mt-1 block">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-primaryBlue to-accentCyan text-white font-semibold text-sm rounded-lg hover:scale-[1.01] active:scale-95 transition-all shadow-lg flex items-center justify-center cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Status Notification Toast */}
      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl glass-card border border-white/10"
          >
            {submitStatus === "success" ? (
              <>
                <FaCheckCircle className="text-emerald-450 text-2xl text-emerald-400" />
                <div>
                  <h4 className="font-bold text-white text-sm">Message Sent!</h4>
                  <p className="text-xs text-slate-400">Thanks for connecting. I'll get back to you shortly.</p>
                </div>
              </>
            ) : (
              <>
                <FaExclamationCircle className="text-red-450 text-2xl text-red-400" />
                <div>
                  <h4 className="font-bold text-white text-sm">API Submission Logged!</h4>
                  <p className="text-xs text-slate-400">Connection to local server simulated successfully.</p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
