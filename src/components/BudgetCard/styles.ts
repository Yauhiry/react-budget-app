import styled from 'styled-components';

const StyledBudgetCard = styled.div`
  display: grid;
  grid-gap: 20px;
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

const Input = styled.input`
  width: 100%;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  background: transparent;
  &::placeholder {
    color: #ffffff99;
  }
  &:focus {
    outline: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
    &:hover,
    &:focus {
      -moz-appearance: number-input;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export { StyledBudgetCard, Text, Button, Input };
