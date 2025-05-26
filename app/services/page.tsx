import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart, Globe, LineChart, Mail, MessageSquare, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our <span className="text-amber-500">Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Comprehensive digital marketing solutions tailored to your business goals and target audience.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All Services</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
                <TabsTrigger value="ppc">PPC</TabsTrigger>
                <TabsTrigger value="social">Social Media</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-border/40 bg-background/50 transition-all hover:border-amber-500/50 hover:shadow-md">
                  <CardHeader>
                    <Globe className="h-10 w-10 text-amber-500" />
                    <CardTitle className="mt-4">SEO Optimization</CardTitle>
                    <CardDescription>
                      Improve your search engine rankings and drive organic traffic to your website.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                      <li>• Keyword Research & Strategy</li>
                      <li>• On-Page SEO Optimization</li>
                      <li>• Technical SEO Audits</li>
                      <li>• Link Building</li>
                      <li>• Local SEO</li>
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                    >
                      Get started <ArrowRight className="ml-1 h-4 w-4" />
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
                    <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                      <li>• Google Ads Management</li>
                      <li>• Social Media Advertising</li>
                      <li>• Display & Remarketing</li>
                      <li>• Shopping Campaigns</li>
                      <li>• Ad Creative Development</li>
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                    >
                      Get started <ArrowRight className="ml-1 h-4 w-4" />
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
                    <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                      <li>• Content Creation & Curation</li>
                      <li>• Community Management</li>
                      <li>• Platform-Specific Strategies</li>
                      <li>• Influencer Partnerships</li>
                      <li>• Social Listening</li>
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                    >
                      Get started <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-border/40 bg-background/50 transition-all hover:border-amber-500/50 hover:shadow-md">
                  <CardHeader>
                    <Mail className="h-10 w-10 text-amber-500" />
                    <CardTitle className="mt-4">Email Marketing</CardTitle>
                    <CardDescription>
                      Nurture leads and drive conversions with targeted email campaigns.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                      <li>• Campaign Strategy</li>
                      <li>• Email Automation</li>
                      <li>• List Segmentation</li>
                      <li>• A/B Testing</li>
                      <li>• Performance Analytics</li>
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                    >
                      Get started <ArrowRight className="ml-1 h-4 w-4" />
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
                    <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                      <li>• Content Strategy</li>
                      <li>• Blog Writing</li>
                      <li>• Copywriting</li>
                      <li>• Video Production</li>
                      <li>• Infographics & Visual Content</li>
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                    >
                      Get started <ArrowRight className="ml-1 h-4 w-4" />
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
                    <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                      <li>• Custom Dashboard Setup</li>
                      <li>• KPI Tracking</li>
                      <li>• Conversion Optimization</li>
                      <li>• Regular Performance Reports</li>
                      <li>• Data-Driven Recommendations</li>
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-amber-500 hover:underline"
                    >
                      Get started <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="seo" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
                  <p className="text-muted-foreground mb-6">
                    Our comprehensive SEO services are designed to improve your search engine rankings, drive organic
                    traffic, and increase your online visibility.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-500/20 p-1">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Keyword Research & Strategy</h4>
                        <p className="text-sm text-muted-foreground">
                          Identify high-value keywords that your target audience is searching for.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-500/20 p-1">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">On-Page SEO Optimization</h4>
                        <p className="text-sm text-muted-foreground">
                          Optimize your website's content, meta tags, and structure for better search visibility.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-500/20 p-1">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Technical SEO Audits</h4>
                        <p className="text-sm text-muted-foreground">
                          Identify and fix technical issues that may be affecting your search performance.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-500/20 p-1">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Link Building</h4>
                        <p className="text-sm text-muted-foreground">
                          Earn high-quality backlinks to boost your domain authority and rankings.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-500/20 p-1">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Local SEO</h4>
                        <p className="text-sm text-muted-foreground">
                          Optimize your online presence to attract more local customers.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                    <Link href="/contact">Get Started with SEO</Link>
                  </Button>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="SEO Services"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Other tab contents would follow the same pattern */}
            <TabsContent value="ppc" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold mb-4">PPC Advertising</h3>
                  <p className="text-muted-foreground mb-6">
                    Our PPC services help you reach your target audience quickly and efficiently, maximizing your return
                    on ad spend.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-500/20 p-1">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Google Ads Management</h4>
                        <p className="text-sm text-muted-foreground">
                          Strategic campaign setup and ongoing optimization to maximize results.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-500/20 p-1">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Social Media Advertising</h4>
                        <p className="text-sm text-muted-foreground">
                          Targeted ads on platforms like Facebook, Instagram, LinkedIn, and more.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-500/20 p-1">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Display & Remarketing</h4>
                        <p className="text-sm text-muted-foreground">
                          Re-engage visitors who have shown interest in your products or services.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-500/20 p-1">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Shopping Campaigns</h4>
                        <p className="text-sm text-muted-foreground">
                          Showcase your products directly in search results to drive sales.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-500/20 p-1">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Ad Creative Development</h4>
                        <p className="text-sm text-muted-foreground">
                          Compelling ad copy and visuals that drive clicks and conversions.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                    <Link href="/contact">Get Started with PPC</Link>
                  </Button>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="PPC Services"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Additional tabs would be implemented similarly */}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
            <p className="text-muted-foreground">We follow a proven methodology to deliver results for our clients.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-black">
                1
              </div>
              <div className="rounded-lg bg-background p-8 pl-16 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  We learn about your business, goals, target audience, and competitors to develop a tailored strategy.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-black">
                2
              </div>
              <div className="rounded-lg bg-background p-8 pl-16 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  We create a comprehensive marketing plan with clear objectives, tactics, and timelines.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-black">
                3
              </div>
              <div className="rounded-lg bg-background p-8 pl-16 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Execution</h3>
                <p className="text-sm text-muted-foreground">
                  Our team implements the strategy with precision, creativity, and attention to detail.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-black">
                4
              </div>
              <div className="rounded-lg bg-background p-8 pl-16 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  We continuously monitor, analyze, and refine our approach to maximize results.
                </p>
              </div>
            </div>
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
                  Ready to transform your digital marketing?
                </h2>
                <p className="mt-4 text-black/80">
                  Contact us today to schedule a free consultation and learn how our services can help you achieve your
                  business goals.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Button asChild size="lg" className="bg-black hover:bg-black/80 text-white">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

