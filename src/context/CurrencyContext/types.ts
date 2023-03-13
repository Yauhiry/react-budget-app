import { Currency } from 'config/currency';
import { ReactNode } from 'react';

export interface CurrencyValue {
  label: string;
  value: string;
}

export interface CurrencyContextValue {
  selectedCurrency: CurrencyValue;
  currencies: CurrencyValue[];
  changeCurrency: (option: CurrencyValue) => void;
}

export interface CurrencyContextProviderProps {
  children: ReactNode;
}
