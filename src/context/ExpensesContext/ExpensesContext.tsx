import { createContext, useContext, useState } from 'react';
import { ExpensesContextProviderProps, ExpensesContextValue } from './types';
import { v4 as uuidv4 } from 'uuid';

const ExpensesContext = createContext<ExpensesContextValue>({} as ExpensesContextValue);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<ExpensesContextValue>(() => {
    return {
      expenses: [],
      addNewExpense: (expense) => {
        const newExpense = { ...expense, id: uuidv4() };
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: [...ctx.expenses, newExpense],
        }));
      },
      deleteExpense: (id) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: [...ctx.expenses.filter((expense) => expense.id !== id)],
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
