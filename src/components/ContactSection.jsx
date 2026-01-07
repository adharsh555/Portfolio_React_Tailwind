import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { cn } from '../lib/utils';
// import { useToast } from "@/hooks/use-toast"; // assuming user has it or I'll use a simpler notification

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.target);

    // IMPORTANT: Replace this with your actual Access Key from Web3Forms
    formData.append("access_key", "49308fab-e1ce-47ff-acac-461c297ebd70");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully."
        });
        e.target.reset();
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again later."
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to connect to the server. Please check your internet connection."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-primary italic">Connect</span>.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto px-4">
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-bold text-center lg:text-left">Contact Details</h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'adharshajay55@gmail.com', href: 'mailto:adharshajay55@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+91 8138090299', href: 'tel:+918138090299' },
                  { icon: MapPin, label: 'Location', value: 'Thrissur, Kerala, India' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group p-2 md:p-0">
                    <div className="flex-shrink-0 p-3 md:p-4 bg-primary/10 rounded-xl md:rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="pt-1.5 md:pt-2">
                      <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-base md:text-lg font-medium hover:text-primary transition-colors block leading-tight">{item.value}</a>
                      ) : (
                        <p className="text-base md:text-lg font-medium leading-tight">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold">Social Profiles</h3>
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/adharsh-p-ajayakumar/' },
                  { icon: Github, href: 'https://github.com/adharsh555' },
                  { icon: Twitter, href: '#' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    className="p-3 md:p-4 bg-card border border-border rounded-xl md:rounded-2xl hover:border-primary/50 hover:text-primary transition-all shadow-xl shadow-primary/5 active:scale-95"
                  >
                    <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl shadow-primary/5 relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

            <form onSubmit={onSubmit} className="relative z-10 space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold uppercase tracking-wider">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 md:px-6 md:py-4 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-sm md:text-base font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold uppercase tracking-wider">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 md:px-6 md:py-4 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-sm md:text-base font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 md:px-6 md:py-4 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors resize-none text-sm md:text-base font-medium"
                />
              </div>

              {status.message && (
                <div className={cn(
                  "p-4 rounded-xl text-sm font-bold animate-fade-in",
                  status.type === "success" ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"
                )}>
                  {status.message}
                </div>
              )}

              <button
                disabled={isSubmitting}
                className="w-full py-4 md:py-5 bg-primary text-primary-foreground font-bold rounded-xl md:rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20 disabled:opacity-50 text-sm md:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
