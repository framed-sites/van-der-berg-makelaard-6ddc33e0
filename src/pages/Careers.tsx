import { useEffect, useState } from 'react'
import { Briefcase, Mail, MapPin, Phone } from 'lucide-react'
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
          Werken bij Van der Berg
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Wij zijn altijd op zoek naar gepassioneerde mensen die van Delft houden en anderen willen helpen hun perfecte woning te vinden. Ontdek hoe het is om te werken bij een familiebedrijf waar elk teamlid ertoe doet.
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
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Waarom Van der Berg?</h2>
        <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
          <p>Voordelen weergegeven als kaarten (zie EN voor details)</p>
        </div>

      </div>
    </section>
  )
}

function JobsSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Vacatures</h2>
        <div className="space-y-4">
          <Card className="hover:border-primary/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">Frontend Developer</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Amsterdam</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />Fulltime</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Wij zoeken een ervaren frontend developer.</p>
                </div>
                <Button variant="outline" asChild className="shrink-0">
                  <a href="#">Solliciteer</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">UX Designer</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Utrecht</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />Fulltime</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Ontwerp gebruikerservaringen die het verschil maken.</p>
                </div>
                <Button variant="outline" asChild className="shrink-0">
                  <a href="#">Solliciteer</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/30 transition-colors">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">Projectmanager</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Rotterdam</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />Fulltime</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Leid projecten van begin tot eind.</p>
                </div>
                <Button variant="outline" asChild className="shrink-0">
                  <a href="#">Solliciteer</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function ContactSection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Solliciteer Nu</h2>
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
              Verstuur Sollicitatie
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


export default function CareersPage() {
  useEffect(() => {
    document.title = 'Vacatures | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ContentSection1 />
      <JobsSection2 />
      <ContactSection3 />
    </main>
  )
}
