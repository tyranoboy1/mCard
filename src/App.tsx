import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardPage from '@/pages/CardPage'
import HomePage from '@/pages/HomePage'
import Test from './pages/Test'
import ScrollToTop from '@/common/components/ScrollToTop'
import SignUpPage from '@/pages/userPage/SignUpPage'

import Navbar from '@common/components/Navbar'
import SignInPage from './pages/userPage/SignInPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/card/:id" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
