import { Outlet } from 'react-router-dom';
import MenuList from '../profile/MenuList';

function Sidebar() {
  return (
    <div className="grid grid-cols-7">
      <MenuList />
      <div className="col-span-6 max-w-screen-2xl m-20">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
