import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart, Globe, LineChart, Mail, MessageSquare, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Elevate Your <span className="text-amber-500">Digital Presence</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Strategic digital marketing solutions that drive growth, engagement, and conversions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto aspect-video w-full max-w-xl rounded-lg bg-muted shadow-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Digital Marketing Dashboard"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="border-y border-border/40 bg-muted/50 py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-semibold">Trusted by Leading Brands</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt={`Client ${i}`}
                  width={160}
                  height={80}
                  className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="text-muted-foreground">
              Comprehensive digital marketing solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/40 bg-background/50 transition-all hover:border-amber-500/50 hover:shadow-md">
              <CardHeader>
                <Globe className="h-10 w-10 text-amber-500" />
                <CardTitle className="mt-4">SEO Optimization</CardTitle>
                <CardDescription>
                  Improve your search engine rankings and drive organic traffic to your website.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-background/50 transition-all hover:border-amber-500/50 hover:shadow-md">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-amber-500" />
                <CardTitle className="mt-4">PPC Advertising</CardTitle>
                <CardDescription>
                  Target your ideal customers with strategic paid advertising campaigns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-background/50 transition-all hover:border-amber-500/50 hover:shadow-md">
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-amber-500" />
                <CardTitle className="mt-4">Social Media Management</CardTitle>
                <CardDescription>
                  Build your brand presence and engage with your audience on social platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-background/50 transition-all hover:border-amber-500/50 hover:shadow-md">
              <CardHeader>
                <Mail className="h-10 w-10 text-amber-500" />
                <CardTitle className="mt-4">Email Marketing</CardTitle>
                <CardDescription>Nurture leads and drive conversions with targeted email campaigns.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-background/50 transition-all hover:border-amber-500/50 hover:shadow-md">
              <CardHeader>
                <BarChart className="h-10 w-10 text-amber-500" />
                <CardTitle className="mt-4">Content Marketing</CardTitle>
                <CardDescription>
                  Create valuable content that attracts and engages your target audience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-background/50 transition-all hover:border-amber-500/50 hover:shadow-md">
              <CardHeader>
                <LineChart className="h-10 w-10 text-amber-500" />
                <CardTitle className="mt-4">Analytics & Reporting</CardTitle>
                <CardDescription>
                  Track performance and gain insights to optimize your marketing strategies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Proven Results</h2>
            <p className="text-muted-foreground">
              Our data-driven approach delivers measurable outcomes for our clients.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-background p-8 text-center shadow-sm">
              <p className="text-5xl font-bold text-amber-500">500+</p>
              <p className="mt-2 text-sm font-medium">Clients Worldwide</p>
            </div>
            <div className="rounded-lg bg-background p-8 text-center shadow-sm">
              <p className="text-5xl font-bold text-amber-500">10x</p>
              <p className="mt-2 text-sm font-medium">Average ROI</p>
            </div>
            <div className="rounded-lg bg-background p-8 text-center shadow-sm">
              <p className="text-5xl font-bold text-amber-500">85%</p>
              <p className="mt-2 text-sm font-medium">Traffic Increase</p>
            </div>
            <div className="rounded-lg bg-background p-8 text-center shadow-sm">
              <p className="text-5xl font-bold text-amber-500">24/7</p>
              <p className="mt-2 text-sm font-medium">Support & Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Client Testimonials</h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                company: "Tech Innovations",
                quote:
                  "Matrix transformed our digital strategy. Our online presence has never been stronger, and we've seen a significant increase in qualified leads.",
              },
              {
                name: "Michael Chen",
                company: "Global Retail",
                quote:
                  "The team at Matrix understands our business goals and consistently delivers campaigns that exceed our expectations. They're true partners in our success.",
              },
              {
                name: "Emily Rodriguez",
                company: "Startup Ventures",
                quote:
                  "As a startup, we needed a marketing partner who could help us stand out. Matrix delivered with creative strategies that put us on the map.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="border-border/40 bg-background/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.company}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-500 py-16">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Ready to grow your business?</h2>
              <p className="mt-4 text-black/80">
                Let's discuss how our digital marketing strategies can help you achieve your business goals.
              </p>
            </div>
            <Button asChild size="lg" className="bg-black hover:bg-black/80 text-white">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

