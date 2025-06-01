import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and innovative projects. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4 w-5 h-5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:beforelyf07@gmail.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    beforelyf07@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-4 w-5 h-5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+917668779153" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    +91 7668779153
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-4 w-5 h-5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Dehradun, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/saurabhbhandari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/saurabhbhandariii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="mt-1"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
