import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardPage from '@/pages/CardPage'
import HomePage from '@/pages/HomePage'
import Test from './pages/Test'
import ScrollToTop from '@/common/components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/card/:id" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
