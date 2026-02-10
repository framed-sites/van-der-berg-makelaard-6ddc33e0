import { useEffect } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
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
          Onze Diensten
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Van de eerste bezichtiging tot de laatste sleuteloverdracht biedt Van der Berg uitgebreide makelaarsdiensten op maat.
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Wat Wij Bieden</h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>Diensten weergegeven als kaarten met iconen (zie EN voor details)</p>
          </div>
          <Button asChild>
            <a href="_self">Neem Contact Op</a>
          </Button>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
            alt="Wat Wij Bieden"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}


function FaqSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Veelgestelde Vragen Over Onze Diensten</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-0">
            <AccordionTrigger>Hoe kan ik contact opnemen?</AccordionTrigger>
            <AccordionContent>
              U kunt ons bereiken via het contactformulier, e-mail of telefoon.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Wat zijn de kosten?</AccordionTrigger>
            <AccordionContent>
              Neem contact met ons op voor een offerte op maat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Hoe lang duurt het proces?</AccordionTrigger>
            <AccordionContent>
              De doorlooptijd is afhankelijk van het project. Neem contact op voor meer informatie.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}


function CtaSection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12 text-center space-y-6 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Klaar om te Beginnen?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Of u nu koopt, verkoopt of gewoon benieuwd bent naar de waarde van uw woning, wij staan voor u klaar. Plan vandaag nog een gratis kennismakingsgesprek.</p>
          <Button size="lg" variant="secondary" asChild>
            <a href="_self">Plan een Gesprek</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Diensten | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ContentSection1 />
      <FaqSection2 />
      <CtaSection3 />
    </main>
  )
}
