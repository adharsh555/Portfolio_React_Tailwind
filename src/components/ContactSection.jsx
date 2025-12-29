import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { cn } from '../lib/utils';
// import { useToast } from "@/hooks/use-toast"; // assuming user has it or I'll use a simpler notification

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic would go here
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent! (Mocked)");
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-primary italic">Connect</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Contact Details</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'adharshajay55@gmail.com', href: 'mailto:adharshajay55@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+91 8138090299', href: 'tel:+918138090299' },
                  { icon: MapPin, label: 'Location', value: 'Thrissur, Kerala, India' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-lg font-medium hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-lg font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Social Profiles</h3>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/adharsh-p-ajayakumar/' },
                  { icon: Github, href: 'https://github.com/adharsh555' },
                  { icon: Twitter, href: '#' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    className="p-4 bg-card border border-border rounded-2xl hover:border-primary/50 hover:text-primary transition-all shadow-xl shadow-primary/5"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

            <form onSubmit={onSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                disabled={isSubmitting}
                className="w-full py-5 bg-primary text-primary-foreground font-bold rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20 disabled:opacity-50"
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
