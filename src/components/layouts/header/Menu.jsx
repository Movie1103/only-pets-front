import { Link, useLocation } from 'react-router-dom';
import { useCategory } from '../../../contexts/CategoryContext';

function Menu() {
  const { setFalse } = useCategory();
  const { pathname } = useLocation();
  return (
    <div className="flex gap-20">
      <Link to="/" className="flex flex-col items-center">
        <p>Home</p>
        {pathname === '/' && (
          <hr className="bg-white opacity-70 rounded-xl w-10 h-1" />
        )}
      </Link>
      <Link
        to="/services"
        className="flex flex-col items-center"
        onClick={() => setFalse()}
      >
        <p onClick={() => setFalse()}>Services</p>
        {pathname === '/services' && (
          <hr className="bg-white opacity-70 rounded-xl w-10 h-1" />
        )}
      </Link>
    </div>
  );
}

export default Menu;
