import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Toaster } from './components/ui/toaster';
import { NotFound } from './Pages/NotFound';
import { EnvironmentProvider } from './context/EnvironmentContext';
import { OverlaySystem } from './components/OverlaySystem';
import { ThemeToggle } from './components/ThemeToggle';

function App() {


  return (
    <EnvironmentProvider>
      <OverlaySystem />
      <ThemeToggle />
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </EnvironmentProvider>
  )
}

export default App
