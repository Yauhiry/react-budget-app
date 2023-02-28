import { Budget, Expenses, AddExpense } from 'components';
import { StyledApp, Container } from './ui/styles';

function App() {
  return (
    <StyledApp>
      <Container>
        <Budget />
        <Expenses />
        <AddExpense />
      </Container>
    </StyledApp>
  );
}

export default App;
