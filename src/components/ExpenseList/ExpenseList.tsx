import { ExpenseItem } from 'components';
import { Expense } from 'context/ExpensesContext/types';
import { EmptyExpenseListText, StyledExpenseList } from './styles';

interface ExpenseListProps {
  expenses: Expense[];
}

export const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    <StyledExpenseList expensesLength={expenses.length}>
      {expenses.length ? (
        expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })
      ) : (
        <EmptyExpenseListText>Oooops 🙈</EmptyExpenseListText>
      )}
    </StyledExpenseList>
  );
};
