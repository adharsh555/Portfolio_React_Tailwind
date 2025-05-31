import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "49308fab-e1ce-47ff-acac-461c297ebd70");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      e.target.reset();
    } else {
      toast({
        title: "Something went wrong.",
        description: "Please try again later or contact directly via email.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-20 ">Contact Information</h3>
<div className="space-y-6 justify-center">
  {/* Email */}
  <div className="flex items-center space-x-4">
    <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
      <Mail className="h-6 w-6 text-primary" />
    </div>
    <div className="flex items-center">
      <a
        href="mailto:adharshajay55@gmail.com"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        adharshajay55@gmail.com
      </a>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-center space-x-4">
    <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
      <Phone className="h-6 w-6 text-primary" />
    </div>
    <div className="flex items-center">
      <a
        href="tel:+918138090299"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        +91 8138090299
      </a>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-center space-x-4">
    <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
      <MapPin className="h-6 w-6 text-primary" />
    </div>
    <div className="flex items-center">
      <p className="text-muted-foreground">Thrissur, Kerala, India</p>
    </div>
  </div>
</div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/adharsh-p-ajayakumar/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-left"
                >
                
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-left"
                >
                
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                  placeholder="Email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-left mb-2"
                >
                
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 "
                )}
              >
                {isSubmitting ? "Sending..." : "Send"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
