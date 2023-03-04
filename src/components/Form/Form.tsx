import { Input, Button } from 'components';
import { useExpensesContext } from 'context';
import { Expense } from 'context/ExpensesContext/types';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { StyledForm, InputGroup } from './styles';

export const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      cost: '',
    },
  });

  const { addNewExpense } = useExpensesContext();

  const onSubmit: SubmitHandler<Expense> = (expense) => {
    addNewExpense(expense);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Controller
          name="name"
          control={control}
          render={({ field: { ref, ...rest } }) => <Input placeholder="enter name ..." {...rest} />}
        />
        <Controller
          name="cost"
          control={control}
          render={({ field: { ref, ...rest } }) => <Input placeholder="enter cost ..." {...rest} />}
        />
      </InputGroup>
      <Button type="submit" />
    </StyledForm>
  );
};
