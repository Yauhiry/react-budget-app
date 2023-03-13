import { ReactNode } from 'react';

export interface BudgetContextValue {
  budget: number;
  setNewBudget: (value: number) => void;
}

export interface BudgetContextProviderProps {
  children: ReactNode;
}
