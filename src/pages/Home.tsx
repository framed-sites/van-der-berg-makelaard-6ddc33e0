import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { Badge } from '../components/ui/badge'
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
          Vind Uw Thuis in het Hart van Delft
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Van der Berg Makelaardij helpt sinds 1987 gezinnen hun perfecte woning te vinden in Delft. Met diepgaande lokale kennis en een persoonlijke aanpak begeleiden wij u bij elke stap van het koop-, verkoop- of huurproces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="_self">Bekijk Woningaanbod</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="_self">Gratis Waardebepaling</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function StatsSection1() {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-primary via-primary to-primary/80">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">500+</div>
            <div className="text-sm text-primary-foreground/70">Tevreden klanten</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">15+</div>
            <div className="text-sm text-primary-foreground/70">Jaar ervaring</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">1000+</div>
            <div className="text-sm text-primary-foreground/70">Projecten afgerond</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">24/7</div>
            <div className="text-sm text-primary-foreground/70">Ondersteuning</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Waarom Kiezen voor Van der Berg?
        </h2>
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Professioneel</h3>
              <p className="text-muted-foreground">Jarenlange ervaring en expertise</p>
            </div>
            <div className="flex-1 aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format" alt="Professioneel" className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Betrouwbaar</h3>
              <p className="text-muted-foreground">U kunt altijd op ons rekenen</p>
            </div>
            <div className="flex-1 aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format" alt="Betrouwbaar" className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Innovatief</h3>
              <p className="text-muted-foreground">Altijd op zoek naar de beste oplossingen</p>
            </div>
            <div className="flex-1 aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format" alt="Innovatief" className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Persoonlijk</h3>
              <p className="text-muted-foreground">Maatwerk voor elke klant</p>
            </div>
            <div className="flex-1 aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format" alt="Persoonlijk" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductsSection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Uitgelichte Woningen</h2>
        <div className="mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format"
                alt="Product Voorbeeld 1"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 right-3">Nieuw</Badge>
            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Product Voorbeeld 1</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€49,99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format"
                alt="Product Voorbeeld 2"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Product Voorbeeld 2</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€79,99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format"
                alt="Product Voorbeeld 3"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 right-3">Populair</Badge>
            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Product Voorbeeld 3</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€99,99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
                alt="Product Voorbeeld 4"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Product Voorbeeld 4</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€59,99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80&auto=format"
                alt="Product Voorbeeld 5"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Product Voorbeeld 5</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€129,99</p>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format"
                alt="Product Voorbeeld 6"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />

            </div>
            <CardContent className="pt-5 space-y-2">
              <h3 className="font-semibold text-foreground">Product Voorbeeld 6</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte beschrijving van het product.</p>
              <p className="text-lg font-bold text-primary">€89,99</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function TestimonialsSection4() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Wat Onze Klanten Zeggen</h2>
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


function ContentSection5() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ontdek de Wijken van Delft</h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>Interactieve sectie met 6 wijkkaarten: Binnenstad (historisch centrum), TU-wijk (universiteitsbuurt), Voorhof (multicultureel, betaalbaar), Tanthof (gezinsvriendelijk), Buitenhof (groen, ruim), Vrijenban (dorps karakter). Elke kaart heeft een karakteristieke foto, gemiddelde prijsindicatie en een korte beschrijving. Klikken leidt naar de wijkdetailpagina.</p>
          </div>
          <Button asChild>
            <a href="_self">Ontdek Alle Wijken</a>
          </Button>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
            alt="Ontdek de Wijken van Delft"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}


function CtaSection6() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12 text-center space-y-6 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Denkt u aan Verkopen?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Ontdek wat uw woning waard is met een gratis, vrijblijvende waardebepaling door een van onze gecertificeerde NVM-makelaars. Wij bezoeken uw woning, analyseren de lokale markt en bezorgen u binnen 48 uur een gedetailleerd waarderingsrapport.</p>
          <Button size="lg" variant="secondary" asChild>
            <a href="_self">Vraag Gratis Waardebepaling Aan</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function BlogSection7() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Het Laatste Nieuws van de Delftse Woningmarkt</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://picsum.photos/600/340?random=40"
                alt="Eerste artikel titel"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="pt-6 space-y-3">
              <time className="text-xs text-muted-foreground">2026-01-15</time>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Eerste artikel titel</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte samenvatting van het artikel...</p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Lees meer
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://picsum.photos/600/340?random=41"
                alt="Tweede artikel titel"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="pt-6 space-y-3">
              <time className="text-xs text-muted-foreground">2026-01-10</time>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Tweede artikel titel</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte samenvatting van het artikel...</p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Lees meer
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[16/9] bg-muted overflow-hidden">
              <img
                src="https://picsum.photos/600/340?random=42"
                alt="Derde artikel titel"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="pt-6 space-y-3">
              <time className="text-xs text-muted-foreground">2026-01-05</time>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Derde artikel titel</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">Een korte samenvatting van het artikel...</p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Lees meer
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


export default function HomePage() {
  useEffect(() => {
    document.title = 'Home | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <StatsSection1 />
      <FeaturesSection2 />
      <ProductsSection3 />
      <TestimonialsSection4 />
      <ContentSection5 />
      <CtaSection6 />
      <BlogSection7 />
    </main>
  )
}
