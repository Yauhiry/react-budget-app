import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 15px 20px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  box-shadow: 0 0 10px #0000001a;
  border-radius: 10px;
  &::placeholder {
    color: #999999;
  }
  &:focus {
    outline: 2px solid #23c9ff;
  }
`;

export { StyledInput };
