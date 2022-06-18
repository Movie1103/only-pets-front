import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useModal } from '../../../contexts/ModalContext';
import AddService from './AddService';

function MenuList() {
  const { user } = useAuth();
  const { showModal, openModal, closeModal } = useModal();

  return (
    <div className="bg-stone-200 h-screen">
      <div className="fixed flex flex-col gap-5 m-10 min-w-[8%]">
        <div className="flex justify-start">
          <button>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <h3 className="font-medium">Profile</h3>
        <Link to={`/profile/${user?.id}`} className="flex flex-col gap-3">
          <div className="py-2 px-6 bg-white rounded-xl">Me</div>
        </Link>
        {user?.role === 'admin' && (
          <Link
            to={`/profile/${user?.id}/services`}
            className="flex flex-col gap-3"
          >
            <div className="py-2 px-6 bg-white rounded-xl">My Services</div>
          </Link>
        )}
        <button
          className="button-add my-3 py-2 px-6"
          onClick={() => openModal()}
        >
          Add Service
        </button>
        <AddService showModal={showModal} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default MenuList;
