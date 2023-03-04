import { Badge } from 'components';
import { StyledExpenseItem, Text, Delete } from './styles';
import { crossIcon } from 'assets';
import { Expense } from 'context/ExpensesContext/types';

interface ExpenseItemProps {
  expense: Expense;
}

export const ExpenseItem = ({ expense: { name, cost } }: ExpenseItemProps) => {
  return (
    <StyledExpenseItem>
      <Text>{name}</Text>
      <Badge cost={cost} />
      <Delete src={crossIcon} />
    </StyledExpenseItem>
  );
};
