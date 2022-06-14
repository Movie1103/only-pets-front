import { Outlet } from 'react-router-dom';
import MenuList from '../profile/MenuList';

function Sidebar() {
  return (
    <div className="flex">
      <MenuList />
      <div className="flex mt-32 ml-32">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
