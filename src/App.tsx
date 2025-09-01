import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/language-context'
import { BusinessProfileHeader } from './components/business-profile-header'
import { NavBar } from './components/nav-bar'
import { Footer } from './components/footer'
import Home from './pages/Home'

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className="bg-black text-white dark" style={{ backgroundColor: "#000000", color: "#ffffff" }}>
        <LanguageProvider>
          <BusinessProfileHeader />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </LanguageProvider>
      </div>
    </Router>
  )
}

export default App
