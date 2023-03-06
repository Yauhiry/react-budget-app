import { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ type, placeholder, ...rest }: InputProps) => {
  return <StyledInput type={type} placeholder={placeholder} {...rest} />;
};
