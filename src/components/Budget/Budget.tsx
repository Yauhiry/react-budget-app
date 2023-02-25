import { CustomSelect } from '../CustomSelect/CustomSelect';
import { BudgetCard } from '../BudgetCard/BudgetCard';
import { RemainingCard } from '../RemainingCard/RemainingCard';
import { SpentCard } from '../SpentCard/SpentCard';
import { Title } from '../Title/Title';

export const Budget = () => {
  return (
    <div>
      <Title />
      <CustomSelect />
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </div>
  );
};
