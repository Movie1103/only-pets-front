import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getAllServices, getUserServices } from '../api/service';
import { useAuth } from '../contexts/AuthContext';

const ServiceContext = createContext();

function ServiceContextProvider({ children }) {
  const [allServices, setAllServices] = useState(null);
  const [userServices, setUserServices] = useState(null);

  const { user } = useAuth();

  const fetchAllServices = useCallback(async () => {
    try {
      const res = await getAllServices();
      setAllServices(res.data.services);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const fetchUserServices = useCallback(async () => {
    try {
      const res = await getUserServices(user?.id);
      setUserServices(res.data.services);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchAllServices();
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserServices();
    }
  }, [user]);

  return (
    <ServiceContext.Provider
      value={{ allServices, userServices, fetchAllServices, fetchUserServices }}
    >
      {children}
    </ServiceContext.Provider>
  );
}

export default ServiceContextProvider;

let ctx;
const useService = () => {
  ctx = useContext(ServiceContext);
  return ctx;
};

export { useService };
