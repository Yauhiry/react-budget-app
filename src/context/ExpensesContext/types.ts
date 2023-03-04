import { ReactNode } from 'react';

export interface ExpensesContextValue {
  expenses: Expense[];
  addNewExpense: (expense: Expense) => void;
  deleteExpense: (name: string) => void;
}

export interface Expense {
  cost: string;
  name: string;
}

export interface ExpensesContextProviderProps {
  children: ReactNode;
}
