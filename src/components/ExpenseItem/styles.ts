import styled from 'styled-components';

const StyledExpenseItem = styled.li`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  grid-template-columns: 1fr auto auto;
  padding: 14px 20px;
  border-bottom: 2px solid #ccd5ff;
`;

const Text = styled.span`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const Delete = styled.img`
  background: none;
  cursor: pointer;
`;

export { StyledExpenseItem, Text, Delete };
