import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-amber-500">MATRIX</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming businesses through innovative digital marketing strategies.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-amber-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-amber-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-amber-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-amber-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-amber-500">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-amber-500">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-amber-500">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-amber-500">
                  PPC Advertising
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-amber-500">
                  Email Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-amber-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-amber-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                123 Marketing Street
                <br />
                New York, NY 10001
              </li>
              <li>
                <Link href="tel:+1234567890" className="text-muted-foreground hover:text-amber-500">
                  +1 (234) 567-890
                </Link>
              </li>
              <li>
                <Link href="mailto:info@matrix.com" className="text-muted-foreground hover:text-amber-500">
                  info@matrix.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Matrix Digital Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

