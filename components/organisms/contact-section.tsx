"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { SocialLinks } from "@/components/molecules/social-links"

export function ContactSection() {
  return (
    <section id="contact" className="section-padding scroll-offset">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-mobile-h2 mb-3 sm:mb-4 gradient-text">Get In Touch</h2>
          <p className="text-mobile-body text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-mobile-h3 mb-4">Let's Connect</h3>
              <p className="text-mobile-body text-muted-foreground mb-6">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-mobile-small font-medium">Email</h4>
                  <p className="text-mobile-small text-muted-foreground">ito@byito.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-mobile-small font-medium">Phone</h4>
                  <p className="text-mobile-small text-muted-foreground">+62 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-mobile-small font-medium">Location</h4>
                  <p className="text-mobile-small text-muted-foreground">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-mobile-small font-medium mb-3">Follow Me</h4>
              <SocialLinks />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="modern-card">
            <CardHeader className="pb-4">
              <CardTitle className="text-mobile-h3">Send Message</CardTitle>
              <CardDescription className="text-mobile-small">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-mobile-small">
                    First Name
                  </Label>
                  <Input id="firstName" placeholder="John" className="text-mobile-small" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-mobile-small">
                    Last Name
                  </Label>
                  <Input id="lastName" placeholder="Doe" className="text-mobile-small" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-mobile-small">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="john@example.com" className="text-mobile-small" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-mobile-small">
                  Subject
                </Label>
                <Input id="subject" placeholder="Project Discussion" className="text-mobile-small" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-mobile-small">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="min-h-[100px] text-mobile-small"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-mobile-small">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
