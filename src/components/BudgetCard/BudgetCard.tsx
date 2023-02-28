import { StyledBudgetCard, Text, Button } from './styles';

export const BudgetCard = () => {
  return (
    <StyledBudgetCard>
      <Text>Budget: $3000</Text>
      <Button>Edit</Button>
    </StyledBudgetCard>
  );
};
