import React, { createContext, useContext, useEffect, useState } from 'react';

const CategoryContext = createContext();

function CategoryContextProvider({ children }) {
  const [isGrooming, setIsGrooming] = useState(true);
  const [isShop, setIsShop] = useState(true);
  const [isHospital, setIsHospital] = useState(true);
  const [isHotel, setIsHotel] = useState(true);
  // console.log(isGrooming, isShop, isHospital, isHotel);

  const toggleGrooming = () => {
    setIsGrooming(prev => !prev);
  };
  const toggleShop = () => {
    setIsShop(prev => !prev);
  };
  const toggleHospital = () => {
    setIsHospital(prev => !prev);
  };
  const toggleHotel = () => {
    setIsHotel(prev => !prev);
  };

  const setFalse = () => {
    setIsGrooming(false);
    setIsShop(false);
    setIsHospital(false);
    setIsHotel(false);
  };

  const setTrue = () => {
    setIsGrooming(true);
    setIsShop(true);
    setIsHospital(true);
    setIsHotel(true);
  };

  useEffect(() => {
    setIsGrooming(true);
    setIsShop(true);
    setIsHospital(true);
    setIsHotel(true);
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        isGrooming,
        isShop,
        isHospital,
        isHotel,
        toggleGrooming,
        toggleShop,
        toggleHospital,
        toggleHotel,
        setIsGrooming,
        setIsShop,
        setIsHospital,
        setIsHotel,
        setFalse,
        setTrue,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

let ctx;
const useCategory = () => {
  ctx = useContext(CategoryContext);
  return ctx;
};

export default CategoryContextProvider;
export { useCategory };
