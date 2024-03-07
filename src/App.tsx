import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardPage from '@/pages/CardPage'
import HomePage from '@/pages/HomePage'
import Test from './pages/Test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/card/:id" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
