import { CurrencyValue } from 'context/CurrencyContext/types';
import { StylesConfig } from 'react-select';

const selectStyles: StylesConfig<CurrencyValue> = {
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 500,
    color: isSelected ? '#ffffff' : '#000000',
    backgroundColor: isSelected ? '#23C9FF' : isFocused ? '#23C9FF1A' : undefined,
    ':active': {
      backgroundColor: !isSelected ? '#23C9FF4D' : undefined,
    },
  }),
  control: (styles, { isFocused }) => ({
    ...styles,
    minHeight: 30,
    boxShadow: isFocused ? `0 0 0 1px #23C9FF` : undefined,
    borderColor: isFocused ? '#23C9FF' : '#cccccc',
    ':hover': {
      borderColor: isFocused ? '#23C9FF' : '#b3b3b3',
    },
  }),
  input: (styles) => ({
    ...styles,
    margin: 0,
  }),
  singleValue: (styles) => ({
    ...styles,
    margin: 0,
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 500,
  }),
  dropdownIndicator: (styles, { selectProps }) => ({
    ...styles,
    padding: 5,
    transform: selectProps.menuIsOpen ? 'rotate(180deg)' : undefined,
  }),
};

export { selectStyles };
