import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

function Dropdown({ show, setShow }) {
  const { logout, user } = useAuth();

  if (!show) return null;
  return (
    <div className="bg-white shadow-lg shadow-zinc-300 rounded-md">
      <Link
        to={`/profile/${user.id}`}
        className="flex flex-col w-40 p-3 rounded-t-md hover:bg-neutral-200"
        onClick={() => setShow(false)}
      >
        Profile
      </Link>
      <button
        className="flex items-center gap-2 w-40 p-3 rounded-b-md hover:bg-neutral-200"
        onClick={() => logout()}
      >
        <i className="fa-solid fa-right-from-bracket"></i>
        Logout
      </button>
    </div>
  );
}

export default Dropdown;
