import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Toaster } from './components/ui/toaster';
import { NotFound } from './Pages/NotFound';
import { EnvironmentProvider } from './context/EnvironmentContext';
import { OverlaySystem } from './components/OverlaySystem';

function App() {


  return (
    <EnvironmentProvider>
      <OverlaySystem />
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
