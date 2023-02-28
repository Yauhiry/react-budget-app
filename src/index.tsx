import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './ui/GlobalStyles';
import { ExpensesContextProvider } from 'context';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ExpensesContextProvider>
    <GlobalStyles />
    <App />
  </ExpensesContextProvider>
);
