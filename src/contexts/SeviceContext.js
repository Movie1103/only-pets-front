import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceContext = useContext();

function ServiceContextProvider({ children }) {
  const [services, setServices] = useState(null);
}
