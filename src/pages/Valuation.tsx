import { useEffect, useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

function HeroSection0() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 md:px-6">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto text-center max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
          Gratis Waardebepaling
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Ontdek wat uw woning waard is. Onze gecertificeerde NVM-makelaars bieden een gratis, vrijblijvende waardebepaling met een gedetailleerd marktrapport dat binnen 48 uur wordt geleverd.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#">Aan de slag</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="#">Meer informatie</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function ContentSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Hoe Het Werkt</h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>Driestappen-proces (zie EN voor details)</p>
          </div>

        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
            alt="Hoe Het Werkt"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

function ContactSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Vraag Uw Gratis Waardebepaling Aan</h2>
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
              Verstuur Aanvraag
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


function TestimonialsSection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Verkopers Die Ons Vertrouwden</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">Uitstekende service en professionaliteit. Zeer tevreden!</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  A
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Anna de Jong</p>
                  <p className="text-xs text-muted-foreground">Klant</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">Snelle communicatie en geweldig resultaat. Aanrader!</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  P
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Peter van Dijk</p>
                  <p className="text-xs text-muted-foreground">Klant</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
              <p className="text-muted-foreground italic -mt-2">Fantastische ervaring van begin tot eind.</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  M
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Maria Visser</p>
                  <p className="text-xs text-muted-foreground">Klant</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


export default function ValuationPage() {
  useEffect(() => {
    document.title = 'Gratis Waardebepaling | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ContentSection1 />
      <ContactSection2 />
      <TestimonialsSection3 />
    </main>
  )
}
