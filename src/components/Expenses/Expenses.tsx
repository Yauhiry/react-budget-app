import { Title, Input, ExpenseList } from 'components';
import { StyledExpenses } from './styles';

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <Input placeholder="search ..." />
      <ExpenseList />
    </StyledExpenses>
  );
};
