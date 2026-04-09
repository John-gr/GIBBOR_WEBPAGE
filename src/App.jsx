import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/landing/Header'
import { Footer } from './components/landing/Footer'
import { Layout } from './components/landing/Layout'
import { HomePage } from './pages/HomePage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { TeamPage } from './pages/TeamPage'
import { AboutPage } from './pages/AboutPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}

export default App
