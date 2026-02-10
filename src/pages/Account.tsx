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
          Welkom bij Van der Berg Makelaardij
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Wij helpen u uw doelen te bereiken met professionele oplossingen.
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Content</h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>Vanuit uw persoonlijke dashboard heeft u overzicht over al uw activiteiten. Bekijk uw opgeslagen woningen, controleer de status van lopende aanvragen en pas uw zoekvoorkeuren aan. Wij houden u op de hoogte van relevant nieuws en aanbod dat perfect bij uw profiel past. Uw privacy staat voorop: alle gegevens worden versleuteld opgeslagen en zijn alleen voor u toegankelijk. Daarnaast kunt u hier uw communicatievoorkeuren instellen en uw zoekcriteria aanpassen.</p>
          </div>

        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
            alt="Content"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

function CtaSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-2xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Klaar om te beginnen?</h2>
        <p className="text-lg text-muted-foreground">Neem vandaag nog contact met ons op.</p>
        <Button size="lg" asChild>
          <a href="#">Neem contact op</a>
        </Button>
      </div>
    </section>
  )
}


export default function AccountPage() {
  useEffect(() => {
    document.title = 'Mijn Account | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ContentSection1 />
      <CtaSection2 />
    </main>
  )
}
