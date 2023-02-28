import { Title, Form } from 'components';
import { StyledAddExpense } from './styles';

export const AddExpense = () => {
  return (
    <StyledAddExpense>
      <Title text="Add Expense" />
      <Form />
    </StyledAddExpense>
  );
};
