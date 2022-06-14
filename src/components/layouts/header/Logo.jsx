import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/onlyPetsLogo.png';

function Logo() {
  return (
    <div>
      <Link className="" to="/">
        <img src={logo} alt="" style={{ width: 60, height: 60 }} />
      </Link>
    </div>
  );
}

export default Logo;
