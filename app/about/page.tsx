import Link from "next/link"
import Image from "next/image"
import { Award, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            About <span className="text-amber-500">Matrix</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We're a team of digital marketing experts passionate about helping businesses grow online.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative aspect-square w-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=800" alt="Our Team" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, Matrix began with a simple mission: to help businesses navigate the complex digital
                  landscape and achieve measurable results.
                </p>
                <p>
                  What started as a small team of passionate marketers has grown into a full-service digital marketing
                  agency with clients across the globe. Our growth has been fueled by our commitment to staying ahead of
                  industry trends and delivering exceptional results for our clients.
                </p>
                <p>
                  Today, we're proud to be recognized as a leader in the digital marketing space, known for our
                  data-driven approach, creative solutions, and dedication to client success.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-500">8+</p>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-500">500+</p>
                  <p className="text-sm text-muted-foreground">Clients Served</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-500">50+</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide our work and relationships.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border/40 bg-background/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We're committed to delivering the highest quality work in everything we do, from strategy to
                  execution.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-background/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20">
                  <Users className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in working closely with our clients, treating their business as our own and their goals as
                  our mission.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-background/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20">
                  <Clock className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We stay ahead of industry trends and continuously explore new strategies and technologies to drive
                  results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="text-muted-foreground">The talented individuals behind our success.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Sarah Johnson", title: "CEO & Founder", image: "SJ" },
              { name: "Michael Chen", title: "Director of SEO", image: "MC" },
              { name: "Emily Rodriguez", title: "Head of Content", image: "ER" },
              { name: "David Kim", title: "PPC Specialist", image: "DK" },
              { name: "Jessica Patel", title: "Social Media Manager", image: "JP" },
              { name: "Robert Wilson", title: "Analytics Lead", image: "RW" },
              { name: "Sophia Martinez", title: "Creative Director", image: "SM" },
              { name: "James Thompson", title: "Client Success Manager", image: "JT" },
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square w-full bg-muted">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=${member.image}`}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-white/80">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border/40 bg-background/50 p-6">
              <CardContent className="p-0">
                <p className="mb-6 text-lg italic text-muted-foreground">
                  "Matrix transformed our digital strategy. Our online presence has never been stronger, and we've seen
                  a significant increase in qualified leads."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100&text=SJ"
                      alt="Sarah Johnson"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CEO, Tech Innovations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-background/50 p-6">
              <CardContent className="p-0">
                <p className="mb-6 text-lg italic text-muted-foreground">
                  "The team at Matrix understands our business goals and consistently delivers campaigns that exceed our
                  expectations. They're true partners in our success."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100&text=MC"
                      alt="Michael Chen"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Marketing Director, Global Retail</p>
                  </div>
                </div>
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
                  Join our growing list of satisfied clients
                </h2>
                <p className="mt-4 text-black/80">
                  Let's discuss how our digital marketing expertise can help you achieve your business goals.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Button asChild size="lg" className="bg-black hover:bg-black/80 text-white">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

