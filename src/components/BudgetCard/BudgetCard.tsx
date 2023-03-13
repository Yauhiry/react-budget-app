import { useBudgetContext, useCurrencyContext } from 'context';
import { useInput, useToggle } from 'hooks';
import { StyledBudgetCard, Text, Button, Input } from './styles';

export const BudgetCard = () => {
  const { selectedCurrency } = useCurrencyContext();
  const { budget, setNewBudget } = useBudgetContext();
  const [isEditMode, setEditMode] = useToggle(false);
  const budgetValue = useInput();

  const handleEditMode = () => {
    setEditMode();
  };

  const handleSave = () => {
    setNewBudget(+budgetValue.value);
    setEditMode();
  };

  return (
    <StyledBudgetCard>
      {isEditMode ? (
        <>
          <Input type="number" placeholder="Enter  budget ..." {...budgetValue} />
          <Button onClick={handleSave}>Save</Button>
        </>
      ) : (
        <>
          <Text>
            Budget: {selectedCurrency.value}
            {budget}
          </Text>
          <Button onClick={handleEditMode}>Edit</Button>
        </>
      )}
    </StyledBudgetCard>
  );
};
