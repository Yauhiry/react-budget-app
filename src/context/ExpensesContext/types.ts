import { ReactNode } from 'react';

export interface ExpensesContextValue {
  expenses: Expense[];
  addNewExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
}

export interface Expense {
  cost: string;
  name: string;
  id: string;
}

export interface ExpensesContextProviderProps {
  children: ReactNode;
}
