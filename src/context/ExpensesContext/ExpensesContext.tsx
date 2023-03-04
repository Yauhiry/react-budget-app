import { createContext, useContext, useState } from 'react';
import { ExpensesContextProviderProps, ExpensesContextValue } from './types';

const ExpensesContext = createContext<ExpensesContextValue>({} as ExpensesContextValue);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<ExpensesContextValue>(() => {
    return {
      expenses: [],
      addNewExpense: (expense) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: [...ctx.expenses, expense],
        }));
      },
      deleteExpense: (name) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: [...ctx.expenses.filter((expense) => expense.name !== name)],
        }));
      },
    };
  });
  return expensesContext;
};

export const useExpensesContext = () => useContext<ExpensesContextValue>(ExpensesContext);

export const ExpensesContextProvider = ({ children }: ExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
