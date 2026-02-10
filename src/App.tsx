import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ListingsPage from './pages/Listings'
import NeighborhoodsPage from './pages/Neighborhoods'
import ValuationPage from './pages/Valuation'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import ContactPage from './pages/Contact'
import BlogPage from './pages/Blog'
import FaqPage from './pages/Faq'
import TeamPage from './pages/Team'
import CareersPage from './pages/Careers'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import TermsConditionsPage from './pages/TermsConditions'
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
        <Route path="/gratis-waardebepaling" element={<ValuationPage />} />
        <Route path="/over-ons" element={<AboutPage />} />
        <Route path="/diensten" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/actueel" element={<BlogPage />} />
        <Route path="/veelgestelde-vragen" element={<FaqPage />} />
        <Route path="/ons-team" element={<TeamPage />} />
        <Route path="/vacatures" element={<CareersPage />} />
        <Route path="/privacybeleid" element={<PrivacyPolicyPage />} />
        <Route path="/algemene-voorwaarden" element={<TermsConditionsPage />} />
        <Route path="/zoekresultaten" element={<SearchResultsPage />} />
        <Route path="/woning/[id]" element={<PropertyDetailPage />} />
        <Route path="/afspraak-maken" element={<BookingPage />} />
        <Route path="/inloggen" element={<LoginPage />} />
        <Route path="/registreren" element={<SignupPage />} />
        <Route path="/mijn-account" element={<AccountPage />} />
        <Route path="/mijn-opdrachten" element={<OrdersPage />} />
        <Route path="/kaart" element={<MapViewPage />} />
        <Route path="/verhuurdersdashboard" element={<HostDashboardPage />} />
        <Route path="/recensies" element={<ReviewsPage />} />
      </Route>
    </Routes>
  )
}
