import { Title, ExpenseList, SearchInput } from 'components';
import { useExpensesContext } from 'context';
import { Expense } from 'context/ExpensesContext/types';
import { useInput, useDebounce } from 'hooks';
import { useEffect, useState } from 'react';
import { StyledExpenses } from './styles';

export const Expenses = () => {
  const searchValue = useInput();
  const debounceValue = useDebounce(searchValue.value);
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) => expense.name.toLowerCase().includes(debounceValue.toLowerCase()))
    );
  }, [debounceValue, expenses]);

  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <SearchInput type="text" placeholder="search ..." {...searchValue} />
      <ExpenseList expenses={filteredExpenses} />
    </StyledExpenses>
  );
};
