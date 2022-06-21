import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useModal } from '../../../contexts/ModalContext';
import AddService from './AddService';

function MenuList() {
  const { user } = useAuth();
  const { showModal, openModal, closeModal } = useModal();

  return (
    <div className="sticky top-10 bg-stone-200 h-screen">
      <div className="sticky top-28 flex flex-col gap-5 m-8">
        <h3 className="font-medium">Profile</h3>
        <Link to={`/profile/${user?.id}`} className="flex flex-col gap-3">
          <div className="py-2 px-4 bg-white rounded-xl">Me</div>
        </Link>
        {user?.role === 'admin' && (
          <Link
            to={`/profile/${user?.id}/services`}
            className="flex flex-col gap-3"
          >
            <div className="flex py-2 px-4 bg-white rounded-xl">
              My Services
            </div>
          </Link>
        )}
        <button
          className="button-add my-3 py-2 px-6"
          onClick={() => openModal()}
        >
          Add Service
        </button>
      </div>
      <AddService showModal={showModal} closeModal={closeModal} />
    </div>
  );
}

export default MenuList;
