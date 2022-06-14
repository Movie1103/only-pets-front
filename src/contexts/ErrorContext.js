import { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

function ErrorContextProvider({ children }) {
  const [error, setError] = useState(null);
  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
}

let ctx;
const useError = () => {
  ctx = useContext(ErrorContext);
  return ctx;
};

export default ErrorContextProvider;

export { useError };
