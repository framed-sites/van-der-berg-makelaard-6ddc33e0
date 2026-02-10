import { useEffect } from 'react'
import { Card, CardContent } from '../components/ui/card'

function TeamSection0() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Ontmoet Ons Team</h2>
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


function TeamSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Onze Makelaars</h2>
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


export default function TeamPage() {
  useEffect(() => {
    document.title = 'Ons Team | Van der Berg Makelaardij'
  }, [])

  return (
    <main>
      <TeamSection0 />
      <TeamSection1 />
    </main>
  )
}
