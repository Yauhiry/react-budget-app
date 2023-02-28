import {
  Title,
  CustomSelect,
  BudgetCard,
  RemainingCard,
  SpentCard,
} from 'components';
import { StyledBudget, CardGroup } from './styles';

export const Budget = () => {
  return (
    <StyledBudget>
      <Title text="Budget App" />
      <CustomSelect />
      <CardGroup>
        <BudgetCard />
        <RemainingCard />
        <SpentCard />
      </CardGroup>
    </StyledBudget>
  );
};
