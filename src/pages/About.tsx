import { useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

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
          Ons Verhaal
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Sinds 1987 is Van der Berg Makelaardij een hoeksteen van de Delftse vastgoedgemeenschap. Opgericht door Hans van der Berg met een eenvoudige overtuiging: het kopen of verkopen van een woning moet een persoonlijke ervaring zijn, begeleid door iemand die de buurt echt kent.
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


function TeamSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">37 Jaar Excellentie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="pt-8 pb-6 space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">JdV</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Jan de Vries</h3>
                <p className="text-sm text-muted-foreground">Directeur</p>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="pt-8 pb-6 space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">LB</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Lisa Bakker</h3>
                <p className="text-sm text-muted-foreground">Manager</p>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="pt-8 pb-6 space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">MJ</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Mark Jansen</h3>
                <p className="text-sm text-muted-foreground">Specialist</p>
              </div>
            </CardContent>
          </Card>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Onze Missie &amp; Waarden</h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>**Missie:** Elke woningtransactie in Delft tot een positieve, persoonlijke ervaring maken door lokale expertise te combineren met professionele excellentie.</p>
            <p>**Kernwaarden:**</p>
            <p>🏠 **Lokaal Eerst** - Wij leven en ademen Delft. Onze makelaars werken hier niet alleen, ze voeden hier hun gezinnen op.</p>
            <p>🤝 **Persoonlijke Aanpak** - Elke klant krijgt een vaste makelaar die 7 dagen per week beschikbaar is. Geen automatische antwoorden, geen doorverwijzingen.</p>
            <p>📊 **Transparant Advies** - Eerlijke marktanalyses, realistische prijsstelling, geen verborgen kosten. Wij adviseren, u beslist.</p>
            <p>🌍 **Inclusieve Gemeenschap** - Of u nu een starter, een groeiend gezin of een expat bent, iedereen is welkom in Delft.</p>
            <p>⭐ **Kwaliteit Gegarandeerd** - NVM gecertificeerd, continu opgeleid en verzekerd. Uw vertrouwen is ons meest waardevolle bezit.</p>
          </div>
          <Button asChild>
            <a href="_self">Ontmoet Ons Team</a>
          </Button>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
            alt="Onze Missie &amp; Waarden"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}


function GallerySection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Ons Kantoor</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format"
              alt="Gallery image 1"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format"
              alt="Gallery image 2"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format"
              alt="Gallery image 3"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
              alt="Gallery image 4"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80&auto=format"
              alt="Gallery image 5"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format"
              alt="Gallery image 6"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Over Ons | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <TeamSection1 />
      <ContentSection2 />
      <GallerySection3 />
    </main>
  )
}
