import './style/index.scss';

import { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import useScript from './hooks/useScript';
import ProductAr from './pages/ProductAr/ProductAr';
import Products from './pages/Products/Products';

function App() {
  const [openFooter, setOpenFooter] = useState(false);

  useScript('https://kit.fontawesome.com/f5200b16a7.js');

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/:sceneId"
            element={<ProductAr openFooter={openFooter} />}
          />
          <Route
            path="/"
            exact
            element={<Products openFooter={openFooter} />}
          />
        </Routes>
      </Router>
      <Footer openFooter={openFooter} setOpenFooter={setOpenFooter} />
    </div>
  );
}

export default App;
