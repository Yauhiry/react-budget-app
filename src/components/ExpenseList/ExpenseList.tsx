import { ExpenseItem } from 'components';
import { StyledExpenseList } from './styles';

export const ExpenseList = () => {
  return (
    <StyledExpenseList>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </StyledExpenseList>
  );
};
