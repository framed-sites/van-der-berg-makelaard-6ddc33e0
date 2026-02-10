import { useEffect } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Button } from '../components/ui/button'

function ContentSection0() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Veelgestelde Vragen</h2>
        <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
          <p>Vind antwoorden op veelgestelde vragen over kopen, verkopen en huren in Delft. Kunt u niet vinden wat u zoekt? Neem direct contact met ons op.</p>
        </div>

      </div>
    </section>
  )
}

function FaqSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Alle Vragen</h2>
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


function CtaSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12 text-center space-y-6 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Nog Vragen?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Ons team staat klaar om u te helpen met al uw vragen over de Delftse woningmarkt.</p>
          <Button size="lg" variant="secondary" asChild>
            <a href="_self">Neem Contact Op</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


export default function FaqPage() {
  useEffect(() => {
    document.title = 'Veelgestelde Vragen | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <ContentSection0 />
      <FaqSection1 />
      <CtaSection2 />
    </main>
  )
}
