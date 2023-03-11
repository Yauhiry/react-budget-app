import { InputHTMLAttributes } from 'react';
import { StyledSearchInput } from './styles';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput = ({ type, placeholder, ...searchValue }: SearchInputProps) => {
  return <StyledSearchInput type={type} placeholder={placeholder} {...searchValue} />;
};
