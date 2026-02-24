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

function LandingPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-bhambola-red selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Community />
        <AIBotSection />
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
          </Routes>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  )
}

export default App
