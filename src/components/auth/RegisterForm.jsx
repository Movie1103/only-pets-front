import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Modal from '../../ui/Modal';
import { userSchema } from '../validations/userValidation';

function RegisterForm({ showModal, onClose, toggleLogin }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      let formData = {
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
      };
      const isValid = await userSchema.isValid(formData);
      if (isValid) {
        await register(formData);
        toggleLogin();
        handleOnClose();
      }
    } catch (err) {}
  };

  const handleOnClose = () => {
    onClose();
    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Modal visible={showModal} onClose={onClose}>
      <form onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-5 text-black">
          <h2 className="flex justify-center">Register</h2>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="inputbox px-4 py-1.5"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="inputbox px-4 py-1.5"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="inputbox px-4 py-1.5"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="inputbox px-4 py-1.5"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-8">
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
            <div className="flex flex-col">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="inputbox px-4 py-1.5"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button type="submit" className="button-submit my-4 py-2 px-20">
            Create Account
          </button>
        </div>
      </form>
      <div className="flex justify-center gap-2 text-xs text-black">
        Already have an account?
        <button className="text-blue" onClick={toggleLogin}>
          Login
        </button>
      </div>
    </Modal>
  );
}

export default RegisterForm;
