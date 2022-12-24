import { Footer, Navigation } from './components'
import { Home, Contact, Product } from './pages'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// styles
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />

        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<Product />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
