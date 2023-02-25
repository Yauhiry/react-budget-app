import { Budget } from './components/Budget/Budget';
import { Expenses } from './components/Expenses/Expenses';
import { AddExpense } from './components/AddExpense/AddExpense';

function App() {
  return (
    <div>
      <Budget />
      <Expenses />
      <AddExpense />
    </div>
  );
}

export default App;
