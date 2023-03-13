import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src="/images/tiendaSmartLogo.png" alt="Tienda Smart" />
    </Link>
  );
}

export default Logo;