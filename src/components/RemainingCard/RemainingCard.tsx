import { useBudgetContext, useCurrencyContext, useExpensesContext } from 'context';
import { StyledRemainingCard, Text } from './styles';

export const RemainingCard = () => {
  const { selectedCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const remaining = budget - expenses.reduce((total, { cost }) => total + +cost, 0);

  const isOverspanding = remaining < 0;

  return (
    <StyledRemainingCard $isOverspanding={isOverspanding}>
      <Text $isOverspanding={isOverspanding}>
        {isOverspanding
          ? `Overspending by ${selectedCurrency.value}${Math.abs(remaining)}`
          : `Remaining: ${selectedCurrency.value}${remaining}`}
      </Text>
    </StyledRemainingCard>
  );
};
