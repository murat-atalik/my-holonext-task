import './style/index.scss';

import { useState } from 'react';

import Footer from './components/Footer/Footer';
import useScript from './hooks/useScript';

function App() {
  const [openFooter, setOpenFooter] = useState(false);

  useScript(
    'https://holonext.azurewebsites.net/public/js/hn-sdk-embed-v4-without-variants.js'
  );
  useScript('https://kit.fontawesome.com/f5200b16a7.js');

  return (
    <div className="App">
      <Footer openFooter={openFooter} setOpenFooter={setOpenFooter} />
    </div>
  );
}

export default App;
