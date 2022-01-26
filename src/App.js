import './style/index.scss';

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
      <BrowserRouter>
        <Routes>
          <Route
            path="/my-holonext-task/:sceneId"
            element={<ProductAr openFooter={openFooter} />}
          />
          <Route
            path="/my-holonext-task"
            exact
            element={<Products openFooter={openFooter} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer openFooter={openFooter} setOpenFooter={setOpenFooter} />
    </div>
  );
}

export default App;
