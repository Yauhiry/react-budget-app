import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './ui/GlobalStyles';
import { CurrencyContextProvider, ExpensesContextProvider } from 'context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <CurrencyContextProvider>
    <ExpensesContextProvider>
      <GlobalStyles />
      <App />
    </ExpensesContextProvider>
  </CurrencyContextProvider>
);
