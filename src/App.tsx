import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PromptDetail from './pages/PromptDetail'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prompt/:id" element={<PromptDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
