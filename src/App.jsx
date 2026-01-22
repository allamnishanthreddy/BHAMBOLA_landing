import Header from './components/Header';
import Hero from './components/Hero';
import Merchandise from './components/Merchandise';
import Community from './components/Community';
import Wallet from './components/Wallet';
import Footer from './components/Footer';
import DownloadSection from './components/DownloadSection';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-bhambola-red selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Merchandise />
        <Community />
        <Wallet />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
