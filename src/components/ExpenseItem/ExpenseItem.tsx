import { Badge } from 'components';
import { StyledExpenseItem, Text, Delete } from './styles';
import { crossIcon } from 'assets';
import { Expense } from 'context/ExpensesContext/types';
import { useExpensesContext } from 'context';

interface ExpenseItemProps {
  expense: Expense;
}

export const ExpenseItem = ({ expense: { name, cost, id } }: ExpenseItemProps) => {
  const { deleteExpense } = useExpensesContext();

  const handleDeleteExpense = () => {
    deleteExpense(id);
  };

  return (
    <StyledExpenseItem>
      <Text>{name}</Text>
      <Badge cost={cost} />
      <Delete src={crossIcon} onClick={handleDeleteExpense} />
    </StyledExpenseItem>
  );
};
