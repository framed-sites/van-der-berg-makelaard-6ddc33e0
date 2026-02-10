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
          Ontdek de Wijken van Delft
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Elke wijk in Delft heeft zijn eigen karakter, charme en gemeenschap. Ontdek onze wijkgidsen om het gebied te vinden dat als thuis voelt.
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Onze Wijkgidsen</h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>Grote kaarten of secties per wijk (zie EN voor details)</p>
          </div>

        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format"
            alt="Onze Wijkgidsen"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

function MapSection2() {
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

export default function NeighborhoodsPage() {
  useEffect(() => {
    document.title = 'Wijken in Delft | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ContentSection1 />
      <MapSection2 />
    </main>
  )
}
