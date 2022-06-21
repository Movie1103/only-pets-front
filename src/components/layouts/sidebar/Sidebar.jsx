import { Outlet } from 'react-router-dom';
import MenuList from '../profile/MenuList';

function Sidebar() {
  return (
    <div className="flex">
      <MenuList />
      <Outlet />
    </div>
  );
}

export default Sidebar;
