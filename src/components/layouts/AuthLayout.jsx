import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './header/Header';

function AuthLayout() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="mx-auto" onClick={() => setShowDropdown(false)}>
      <Header show={showDropdown} setShow={setShowDropdown} />
      <Outlet />
    </div>
  );
}
export default AuthLayout;
