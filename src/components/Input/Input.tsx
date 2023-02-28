import { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ placeholder }: InputProps) => {
  return <StyledInput placeholder={placeholder} />;
};
