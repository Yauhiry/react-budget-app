import { Title } from '../Title/Title';
import { Input } from '../Input/Input';
import { ExpenseList } from '../ExpenseList/ExpenseList';

export const Expenses = () => {
  return (
    <div>
      <Title />
      <Input />
      <ExpenseList />
    </div>
  );
};
