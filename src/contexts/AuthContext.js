import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await axios.get('/users/me');
          setUser(resMe.data.user);
        }
      } catch (err) {
        removeAccessToken();
        navigate('/login');
      }
    };
    fetchMe();
  }, []);

  const register = async input => {
    const res = await axios.post('/auth/register', input);
    setAccessToken(res.data.token);
    const resMe = await axios.get('/users/me');
    setUser(resMe.data.user);
  };

  const login = async input => {
    const res = await axios.post('/auth/login', input);
    setAccessToken(res.data.token);
    const resMe = await axios.get('/users/me');
    setUser(resMe.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ register, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

let ctx;
const useAuth = () => {
  ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { useAuth };
