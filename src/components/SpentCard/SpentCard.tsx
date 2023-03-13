import { useCurrencyContext, useExpensesContext } from 'context';
import { StyledSpentCard, Text } from './styles';

export const SpentCard = () => {
  const { expenses } = useExpensesContext();
  const { selectedCurrency } = useCurrencyContext();
  const getExpensesTotalCost = expenses.reduce((total, { cost }) => total + +cost, 0);

  return (
    <StyledSpentCard>
      <Text>
        Spent so far: {selectedCurrency.value}
        {getExpensesTotalCost}
      </Text>
    </StyledSpentCard>
  );
};
