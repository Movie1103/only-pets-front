import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

function MenuList() {
  const { user } = useAuth();

  const userObj = [
    { id: 1, title: 'Me', path: `/profile/${user?.id}` },
    { id: 2, title: 'My services', path: `/profile/${user?.id}/services` },
  ];

  return (
    <div className="flex flex-col gap-5 bg-stone-200 w-1/6 p-9 h-screen">
      <button className="flex justify-start">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h3 className="font-medium">Profile</h3>
      {userObj.map(el => (
        <Link to={el.path} key={el.id} className="flex flex-col gap-3">
          <div className="py-2 px-6 bg-white rounded-xl">{el.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default MenuList;
