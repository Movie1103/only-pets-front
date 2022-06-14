import { Link, useLocation } from 'react-router-dom';

function Menu() {
  const { pathname } = useLocation();
  return (
    <div className="flex gap-20">
      <Link to="/" className="flex flex-col items-center">
        <p>Home</p>
        {pathname === '/' && (
          <hr className="bg-white opacity-70 rounded-xl w-8 h-1" />
        )}
      </Link>
      <Link to="/services" className="flex flex-col items-center">
        <p>Services</p>
        {pathname === '/services' && (
          <hr className="bg-white opacity-70 rounded-xl w-8 h-1" />
        )}
      </Link>
    </div>
  );
}

export default Menu;
