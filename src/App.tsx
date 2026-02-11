import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ListingsPage from './pages/Listings'
import NeighborhoodsPage from './pages/Neighborhoods'
import ServicesPage from './pages/Services'
import AboutPage from './pages/About'
import BlogPage from './pages/Blog'
import ContactPage from './pages/Contact'
import FaqPage from './pages/Faq'
import TeamPage from './pages/Team'
import CareersPage from './pages/Careers'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import TermsConditionsPage from './pages/TermsConditions'
import ValuationPage from './pages/Valuation'
import SearchResultsPage from './pages/SearchResults'
import PropertyDetailPage from './pages/PropertyDetail'
import BookingPage from './pages/Booking'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import AccountPage from './pages/Account'
import OrdersPage from './pages/Orders'
import MapViewPage from './pages/MapView'
import HostDashboardPage from './pages/HostDashboard'
import ReviewsPage from './pages/Reviews'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/woningaanbod" element={<ListingsPage />} />
        <Route path="/wijken-in-delft" element={<NeighborhoodsPage />} />
        <Route path="/diensten" element={<ServicesPage />} />
        <Route path="/over-ons" element={<AboutPage />} />
        <Route path="/actueel" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/veelgestelde-vragen" element={<FaqPage />} />
        <Route path="/ons-team" element={<TeamPage />} />
        <Route path="/vacatures" element={<CareersPage />} />
        <Route path="/privacybeleid" element={<PrivacyPolicyPage />} />
        <Route path="/algemene-voorwaarden" element={<TermsConditionsPage />} />
        <Route path="/gratis-waardebepaling" element={<ValuationPage />} />
        <Route path="/zoekresultaten" element={<SearchResultsPage />} />
        <Route path="/woning/[id]" element={<PropertyDetailPage />} />
        <Route path="/afspraak" element={<BookingPage />} />
        <Route path="/inloggen" element={<LoginPage />} />
        <Route path="/registreren" element={<SignupPage />} />
        <Route path="/mijn-account" element={<AccountPage />} />
        <Route path="/bestellingen" element={<OrdersPage />} />
        <Route path="/kaart" element={<MapViewPage />} />
        <Route path="/verhuur-dashboard" element={<HostDashboardPage />} />
        <Route path="/beoordelingen" element={<ReviewsPage />} />
      </Route>
    </Routes>
  )
}
