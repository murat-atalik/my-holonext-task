import './footer.scss';

import React, { useState } from 'react';

import logo from '../../assets/images/holonext-logo.png';

function Footer({ openFooter, setOpenFooter }) {
  const [containerClass, setContainerClass] = useState('footer');
  const [imageContainer, setImageContainer] = useState('');
  const handleFooterOpen = () => {
    setContainerClass('footer-close');
    setImageContainer('image-close');
    setOpenFooter(true);
  };
  const handleFooterClose = () => {
    setTimeout(() => {
      setOpenFooter(false);
    }, 480);
    setContainerClass('footer-open');
    setImageContainer('image-open');
  };
  return (
    <footer className={containerClass}>
      {!openFooter ? (
        <button
          onClick={handleFooterOpen}
          type="button"
          className="open-menu-button"
        >
          <i className="fas fa-bars " />
        </button>
      ) : (
        <button
          onClick={handleFooterClose}
          type="button"
          className="close-menu-button"
        >
          <i className="fas fa-times" />
        </button>
      )}
      {openFooter && (
        <div
          className={
            !openFooter
              ? 'close-menu-container-hidden'
              : `close-menu-container ${containerClass}`
          }
        >
          <div className="logo">
            <img src={logo} alt="holonext" className={imageContainer} />
          </div>
          <div className="footer-content">
            <a href="https://www.holonext.com/">About Us</a>
            <a href="https://www.holonext.com/">Company</a>
            <a href="https://www.holonext.com/">Cookie Policy</a>
            <a href="https://www.holonext.com/">Terms of Use</a>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
