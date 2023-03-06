import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  grid-gap: 30px;
`;

const InputGroup = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const Error = styled.span`
  padding: 0 20px;
  color: #ff0000;
`;

export { StyledForm, InputGroup, Error };
