import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Modal from '../../ui/Modal';
import { loginSchema } from '../validations/userValidation';

function LoginForm({ showModal, onClose, toggleRegister }) {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const formData = {
        usernameOrEmail,
        password,
      };
      const isValid = await loginSchema.isValid(formData);
      if (isValid) {
        await login(formData);
        handleOnClose();
      }
    } catch (err) {}
  };
  const handleOnClose = () => {
    onClose();
    setUsernameOrEmail('');
    setPassword('');
  };

  return (
    <Modal visible={showModal} onClose={handleOnClose}>
      <form onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-5 text-black">
          <h2 className="flex justify-center">Login</h2>
          <div className="flex flex-col">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              className="inputbox px-4 py-1.5"
              value={usernameOrEmail}
              onChange={e => setUsernameOrEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="inputbox px-4 py-1.5"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="button-submit my-3 py-2">
            Login
          </button>
        </div>
      </form>
      <div className="flex justify-center gap-2 text-xs text-black">
        Don't have an account?
        <button className="text-blue" onClick={toggleRegister}>
          Register
        </button>
      </div>
    </Modal>
  );
}

export default LoginForm;
