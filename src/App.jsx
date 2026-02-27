import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Merchandise from './components/Merchandise';
import Community from './components/Community';
import Wallet from './components/Wallet';
import Footer from './components/Footer';
import DownloadSection from './components/DownloadSection';
import WhatsAppButton from './components/WhatsAppButton';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountSummary from './pages/AccountSummary';
import ChangePassword from './pages/ChangePassword';
import RatingsSection from './components/RatingsSection';
import VideoTransition from './components/VideoTransition';
import AIBotSection from './components/AIBotSection';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import GameRulesPage from './pages/GameRulesPage';
import LegalPolicyPage from './pages/LegalPolicyPage';
import AboutUsPage from './pages/AboutUsPage';

function LandingPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-bhambola-red selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Community />
        <AIBotSection />
        <Wallet />
        <DownloadSection /> {/* Play Anytime */}
        <Merchandise />
        <RatingsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/intro" element={<VideoTransition />} />
            <Route path="/account" element={<AccountSummary />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/rules" element={<GameRulesPage />} />
            <Route path="/legal-policy" element={<LegalPolicyPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  )
}

export default App
