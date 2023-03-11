import styled from 'styled-components';

const StyledExpenseList = styled.ul<{ expensesLength: number }>`
  display: ${(props) => (props.expensesLength ? 'block' : 'grid')};
  min-height: 200px;
  max-height: 300px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #0000001a;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #7cc6fe;
    border-radius: 5px;
  }
`;

const EmptyExpenseListText = styled.span`
  place-self: center;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export { StyledExpenseList, EmptyExpenseListText };
