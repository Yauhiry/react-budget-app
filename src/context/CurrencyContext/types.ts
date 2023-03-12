import { Currency } from 'config/currency';
import { ReactNode } from 'react';

export interface CurrencyValue {
  label: keyof typeof Currency;
  value: Currency;
}

export interface CurrencyContextValue {
  selectedCurrency: CurrencyValue;
  currencies: CurrencyValue[];
  changeCurrency: (option: CurrencyValue) => void;
}

export interface CurrencyContextProviderProps {
  children: ReactNode;
}
