import ModalContextProvider from './contexts/ModalContext';
import ServiceContextProvider from './contexts/SeviceContext';
import Router from './routes/Router';

export default function App() {
  return (
    <ServiceContextProvider>
      <ModalContextProvider>
        <Router />
      </ModalContextProvider>
    </ServiceContextProvider>
  );
}
