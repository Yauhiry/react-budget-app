import styled from 'styled-components';

const StyledBudget = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 30px;
`;

const CardGroup = styled.div`
  display: grid;
  grid-column: 1/3;
  grid-gap: 20px;
`;

export { StyledBudget, CardGroup };
