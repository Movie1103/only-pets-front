import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import LoginForm from '../../auth/LoginForm';
import RegisterForm from '../../auth/RegisterForm';
import Logo from './Logo';
import Menu from './Menu';
import ProfileIcon from './ProfileIcon';

function Header({ show, setShow }) {
  const [showModal, setShowModal] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState('login');
  const { user } = useAuth();

  const handleOnClose = () => {
    setShowModal(false);
    setLoginOrRegister('login');
  };
  const toggleRegister = () => {
    setLoginOrRegister('register');
  };
  const toggleLogin = () => {
    setLoginOrRegister('login');
  };

  return (
    <>
      <div className="py-1 bg-orange text-white hover:text-gray-700 focus:text-gray-700">
        <div className="flex items-center justify-between px-32">
          <div className="flex justify-between items-center gap-40">
            <Logo />
            <Menu />
          </div>
          {user ? (
            <div className="flex items-center">
              <ProfileIcon show={show} setShow={setShow} />
            </div>
          ) : (
            <>
              <div className="flex items-center gap-7">
                <button
                  className="bg-white w-10 h-10 rounded-full"
                  onClick={() => setShowModal(true)}
                >
                  <i className="fa-solid fa-user text-orange text-2xl"></i>
                </button>
              </div>
              {loginOrRegister === 'login' && (
                <LoginForm
                  showModal={showModal}
                  onClose={handleOnClose}
                  toggleRegister={toggleRegister}
                />
              )}
              {loginOrRegister === 'register' && (
                <RegisterForm
                  showModal={showModal}
                  onClose={handleOnClose}
                  toggleLogin={toggleLogin}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
