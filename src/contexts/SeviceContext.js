import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  deleteServiceById,
  getAllServices,
  getUserServices,
  updateUserService,
} from '../api/service';
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
      const res = await getUserServices();
      console.log(res.data);
      setUserServices(res.data.services);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const updateService = async (serviceId, formData) => {
    try {
      await updateUserService(serviceId, formData);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteService = async serviceId => {
    try {
      await deleteServiceById(serviceId);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllServices();
    if (user) {
      fetchUserServices();
    }
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        allServices,
        userServices,
        fetchAllServices,
        fetchUserServices,
        updateService,
        deleteService,
      }}
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
