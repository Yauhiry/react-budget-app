import { Badge } from 'components';
import { StyledExpenseItem, Text, Delete } from './styles';
import { crossIcon } from 'assets';

export const ExpenseItem = () => {
  return (
    <StyledExpenseItem>
      <Text>shoping</Text>
      <Badge />
      <Delete src={crossIcon} />
    </StyledExpenseItem>
  );
};
