
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { AtSign, MapPin, Phone, Send } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

const Contact = () => {
  useEffect(() => {
    document.title = "Gourab | Contact";
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Option 1: Send to a backend API
      // Replace with your actual API endpoint
      // const response = await fetch('https://your-api-endpoint.com/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      
      // Option 2: Send to FormSubmit (a free service)
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Replace 'your-email@example.com' with your actual email
      await fetch('https://formsubmit.co/gourab.rkm@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        },
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h1>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-1 space-y-6">
                <div className="glass-panel p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <AtSign className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Email</h3>
                        <p className="text-sm text-foreground/70">gourabdas2128@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Phone</h3>
                        <p className="text-sm text-foreground/70">+91 7364997118</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Location</h3>
                        <p className="text-sm text-foreground/70">Kolkata, India</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Calling Hours</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Monday - Friday:</span>
                      <span className="text-sm text-foreground/70">4:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Saturday:</span>
                      <span className="text-sm text-foreground/70">2:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sunday:</span>
                      <span className="text-sm text-foreground/70">7:00 AM - 10:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="glass-panel p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your name" 
                                  className="bg-secondary/50 border border-border focus:ring-primary/50" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="your.email@example.com" 
                                  className="bg-secondary/50 border border-border focus:ring-primary/50" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="How can I help you?" 
                                className="bg-secondary/50 border border-border focus:ring-primary/50" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your message here..." 
                                className="resize-none bg-secondary/50 border border-border focus:ring-primary/50" 
                                rows={5} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
