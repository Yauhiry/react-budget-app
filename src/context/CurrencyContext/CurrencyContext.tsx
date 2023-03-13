import { Currency } from 'config/currency';
import { createContext, useContext, useState } from 'react';
import { CurrencyContextProviderProps, CurrencyContextValue } from './types';

const CurrencyContext = createContext<CurrencyContextValue>({} as CurrencyContextValue);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<CurrencyContextValue>(() => {
    return {
      selectedCurrency: { label: 'USD', value: Currency.USD },
      currencies: [
        { label: 'USD', value: Currency.USD },
        { label: 'EUR', value: Currency.EUR },
        { label: 'GBR', value: Currency.GBR },
      ],
      setCurrency: (selectedCurrency) => {
        setCurrencyContext((ctx) => ({ ...ctx, selectedCurrency }));
      },
    };
  });
  return currencyContext;
};

export const useCurrencyContext = () => useContext<CurrencyContextValue>(CurrencyContext);

export const CurrencyContextProvider = ({ children }: CurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
