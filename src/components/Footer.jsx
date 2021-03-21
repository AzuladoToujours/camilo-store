import React from 'react';
import '../styles/components/Footer.styl';

const Footer = () => (
  <div className="Footer">
    <p className="Footer-title">Camilito Store</p>
    <ul className="Footer-social-icons">
      <li><a className="github" href="https://github.com/AzuladoToujours/camilo-store"><i className="fa fa-github" /></a></li>
      <li><a className="linkedin" href="https://www.linkedin.com/in/camilo-mej%C3%ADa-71096a201/"><i className="fa fa-linkedin" /></a></li>
    </ul>
    <p className="Footer-copy">Empresariales 2021</p>
  </div>
);

export default Footer;
