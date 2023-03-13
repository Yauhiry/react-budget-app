import { createContext, useContext, useState } from 'react';
import { BudgetContextProviderProps, BudgetContextValue } from './types';

const BudgetContext = createContext<BudgetContextValue>({} as BudgetContextValue);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<BudgetContextValue>(() => {
    return {
      budget: 0,
      setNewBudget: (value) => {
        setBudgetContext((ctx) => ({ ...ctx, budget: value }));
      },
    };
  });
  return budgetContext;
};

export const useBudgetContext = () => useContext<BudgetContextValue>(BudgetContext);

export const BudgetContextProvider = ({ children }: BudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
