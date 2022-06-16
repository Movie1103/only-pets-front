import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

function ModalContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

let ctx;
const useModal = () => {
  ctx = useContext(ModalContext);
  return ctx;
};

export default ModalContextProvider;
export { useModal };
