import { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ placeholder, ...rest }: InputProps) => {
  return <StyledInput placeholder={placeholder} onChange={rest.onChange} name={rest.name} />;
};
