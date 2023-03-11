import { useExpensesContext } from 'context';
import { StyledSpentCard, Text } from './styles';

export const SpentCard = () => {
  const { expenses } = useExpensesContext();

  const getExpensesTotalCost = expenses.reduce((total, { cost }) => total + +cost, 0);
  return (
    <StyledSpentCard>
      <Text>Spent so far: ${getExpensesTotalCost}</Text>
    </StyledSpentCard>
  );
};
