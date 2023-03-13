import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './ui/GlobalStyles';
import App from './App';
import { AppContextProvider } from 'context/AppContext/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <AppContextProvider>
    <GlobalStyles />
    <App />
  </AppContextProvider>
);
