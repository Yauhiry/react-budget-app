import { Input, Button } from 'components';
import { useExpensesContext } from 'context';
import { Expense } from 'context/ExpensesContext/types';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { StyledForm, InputGroup, Error } from './styles';

export const Form = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Expense>({
    defaultValues: {
      name: '',
      cost: '',
    },
  });

  const { addNewExpense } = useExpensesContext();

  const onSubmit: SubmitHandler<Expense> = (expense) => {
    addNewExpense(expense);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Controller
          name="name"
          control={control}
          rules={{
            required: '⚠ Name is required.',
            pattern: { value: /^[A-Za-z]+$/, message: '⚠  Only Letters!' },
            maxLength: { value: 15, message: '⚠ Exceeds the maximum allowed length' },
          }}
          render={({ field: { ref, ...rest } }) => (
            <Input type="text" placeholder="enter name ..." {...rest} />
          )}
        />
        {errors.name?.message && <Error>{errors.name.message}</Error>}
        <Controller
          name="cost"
          control={control}
          rules={{
            required: '⚠ Cost is required.',
            pattern: { value: /[0-9]/, message: '⚠  Only numbers!' },
            maxLength: { value: 5, message: '⚠ Exceeds the maximum allowed length' },
          }}
          render={({ field: { ref, ...rest } }) => (
            <Input type="number" placeholder="enter cost ..." {...rest} />
          )}
        />
        {errors.cost?.message && <Error>{errors.cost.message}</Error>}
      </InputGroup>
      <Button type="submit" />
    </StyledForm>
  );
};
