import { useEffect } from 'react'

function ContentSection0() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Algemene Voorwaarden</h2>
        <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
          <p>Algemene voorwaarden voor Van der Berg Makelaardij diensten (zie EN voor details)</p>
        </div>

      </div>
    </section>
  )
}

export default function TermsConditionsPage() {
  useEffect(() => {
    document.title = 'Algemene Voorwaarden | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <ContentSection0 />
    </main>
  )
}
