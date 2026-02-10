import { useEffect, useState } from 'react'
import { Check, Mail, MapPin, Phone } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

function PricingSection0() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Neem Contact Op</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="">

            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">€29</span>
                <span className="text-muted-foreground">/maand</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  5 projecten
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  Basis support
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  E-mail notificaties
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <a href="#">Aan de slag</a>
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-primary shadow-lg shadow-primary/10 relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Popular</Badge>
            <CardHeader>
              <CardTitle>Professional</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">€79</span>
                <span className="text-muted-foreground">/maand</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  Onbeperkt projecten
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  Prioriteit support
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  Geavanceerde analytics
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  API toegang
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <a href="#">Aan de slag</a>
              </Button>
            </CardFooter>
          </Card>
          <Card className="">

            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">Op maat</span>

              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  Alles van Professional
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  Dedicated account manager
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  SLA garantie
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  Custom integraties
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <a href="#">Aan de slag</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}


function ContactSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Stuur Ons een Bericht</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Naam</Label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefoon</Label>
              <Input type="tel" id="phone" name="phone" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Bericht</Label>
              <Textarea id="message" name="message" rows={5} required />
            </div>
            <Button type="submit" className="w-full">
              Verstuur Bericht
            </Button>
          </form>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">E-mail</h3>
                <p className="text-sm text-muted-foreground">info@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Telefoon</h3>
                <p className="text-sm text-muted-foreground">+31 (0)20 123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Adres</h3>
                <p className="text-sm text-muted-foreground">Keizersgracht 123, 1015 CJ Amsterdam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function ContentSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Bezoek Ons Kantoor</h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>Contactgegevens (zie EN voor details)</p>
          </div>
          <Button asChild>
            <a href="_blank">Open in Google Maps</a>
          </Button>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
            alt="Bezoek Ons Kantoor"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}


function MapSection3() {
  return (
    <section className="py-8 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-xl overflow-hidden border border-border/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8!2d4.8946!3d52.3676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzAzLjQiTiA0wrA1Myc0MC42IkU!5e0!3m2!1sen!2snl!4v1600000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          />
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <PricingSection0 />
      <ContactSection1 />
      <ContentSection2 />
      <MapSection3 />
    </main>
  )
}
