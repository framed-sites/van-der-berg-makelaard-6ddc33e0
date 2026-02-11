import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="text-lg font-semibold text-foreground">
              Van der Berg Makelaardij
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; 2026 Van der Berg Makelaardij. Alle rechten voorbehouden.
            </p>
          </div>

          <nav className="flex items-center gap-4">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link to="/veelgestelde-vragen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Veelgestelde Vragen</Link>
            <Link to="/vacatures" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Vacatures</Link>
            <Link to="/privacybeleid" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacybeleid</Link>
            <Link to="/algemene-voorwaarden" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Algemene Voorwaarden</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
