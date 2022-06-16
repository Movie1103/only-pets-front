import ModalContextProvider from './contexts/ModalContext';
import Router from './routes/Router';

export default function App() {
  return (
    <ModalContextProvider>
      <Router />
    </ModalContextProvider>
  );
}
