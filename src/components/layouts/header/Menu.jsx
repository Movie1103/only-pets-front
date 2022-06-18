import { Link, useLocation } from 'react-router-dom';
import { useCategory } from '../../../contexts/CategoryContext';

function Menu() {
  const { setTrue } = useCategory();
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
        onClick={() => setTrue()}
      >
        <p onClick={() => setTrue()}>Services</p>
        {pathname === '/services' && (
          <hr className="bg-white opacity-70 rounded-xl w-10 h-1" />
        )}
      </Link>
    </div>
  );
}

export default Menu;
