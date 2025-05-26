"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Contact <span className="text-amber-500">Us</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Have a question or ready to start your project? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below, and one of our digital marketing experts will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry"
                    required
                    className="min-h-[150px]"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions or need assistance? Reach out to us using any of the methods below.
                </p>

                <div className="grid gap-6">
                  <Card className="border-border/40 bg-background/50">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20">
                        <MapPin className="h-6 w-6 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-bold">Our Office</h3>
                        <p className="text-sm text-muted-foreground">
                          123 Marketing Street
                          <br />
                          New York, NY 10001
                          <br />
                          United States
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/40 bg-background/50">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20">
                        <Mail className="h-6 w-6 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-bold">Email Us</h3>
                        <p className="text-sm text-muted-foreground mb-1">General Inquiries:</p>
                        <Link href="mailto:info@matrix.com" className="text-sm text-amber-500 hover:underline">
                          info@matrix.com
                        </Link>
                        <p className="text-sm text-muted-foreground mb-1 mt-2">Support:</p>
                        <Link href="mailto:support@matrix.com" className="text-sm text-amber-500 hover:underline">
                          support@matrix.com
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/40 bg-background/50">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20">
                        <Phone className="h-6 w-6 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-bold">Call Us</h3>
                        <p className="text-sm text-muted-foreground mb-1">Main Office:</p>
                        <Link href="tel:+1234567890" className="text-sm text-amber-500 hover:underline">
                          +1 (234) 567-890
                        </Link>
                        <p className="text-sm text-muted-foreground mb-1 mt-2">Customer Support:</p>
                        <Link href="tel:+1234567891" className="text-sm text-amber-500 hover:underline">
                          +1 (234) 567-891
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Map Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Find Us</h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0059418!3d40.7127847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about our services.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border/40 bg-background/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How long does it take to see results?</h3>
                <p className="text-sm text-muted-foreground">
                  Results vary depending on the service and your specific goals. SEO typically takes 3-6 months to show
                  significant results, while PPC can drive traffic immediately. During our initial consultation, we'll
                  provide a realistic timeline based on your specific situation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-background/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How much do your services cost?</h3>
                <p className="text-sm text-muted-foreground">
                  We offer customized pricing based on your specific needs and goals. Our services are available as
                  individual solutions or as comprehensive packages. Contact us for a personalized quote.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-background/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you offer contracts?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we typically work on 6 or 12-month contracts to ensure we have enough time to implement
                  strategies and deliver results. However, we also offer month-to-month options for certain services.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-background/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How do you report on results?</h3>
                <p className="text-sm text-muted-foreground">
                  We provide detailed monthly reports that track key performance indicators relevant to your goals.
                  You'll also have access to a real-time dashboard and regular check-in calls with your dedicated
                  account manager.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-lg bg-amber-500 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Ready to grow your business?
                </h2>
                <p className="mt-4 text-black/80">
                  Let's discuss how our digital marketing expertise can help you achieve your business goals.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Button asChild size="lg" className="bg-black hover:bg-black/80 text-white">
                  <Link
                    href="#contact-form"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Get Started Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

