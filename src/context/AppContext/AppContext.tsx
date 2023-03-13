import { FC, ReactNode } from 'react';
import { BudgetContextProvider, CurrencyContextProvider, ExpensesContextProvider } from 'context';

const providers = [BudgetContextProvider, CurrencyContextProvider, ExpensesContextProvider];

export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      {providers.reduceRight((total, Provider) => {
        return <Provider>{total}</Provider>;
      }, children)}
    </>
  );
};
