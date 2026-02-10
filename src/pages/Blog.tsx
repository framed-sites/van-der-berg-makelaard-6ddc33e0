import { useEffect } from 'react'
import { Button } from '../components/ui/button'

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
          Actueel
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Blijf op de hoogte van de Delftse woningmarkt met expertanalyses, koop- en verkooptips, wijkspotlights en nieuws van Van der Berg.
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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Laatste Artikelen</h2>
        <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
          <p>Uitgelicht artikel bovenaan (groot), gevolgd door een grid van artikelen. Categorieën: Marktanalyse, Kooptips, Verkooptips, Wijk Spotlight, Bedrijfsnieuws.</p>
        </div>

      </div>
    </section>
  )
}

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Actueel | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ContentSection1 />
    </main>
  )
}
