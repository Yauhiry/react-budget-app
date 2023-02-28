import styled from 'styled-components';

const StyledBudgetCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  padding: 32px 20px;
  background: #7cc6fe;
  border-radius: 10px;
`;

const Text = styled.span`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const Button = styled.button`
  justify-self: right;
  padding: 10px 30px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;
`;

export { StyledBudgetCard, Text, Button };
