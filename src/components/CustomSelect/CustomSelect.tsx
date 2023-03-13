import { useCurrencyContext } from 'context';
import { CurrencyValue } from 'context/CurrencyContext/types';
import Select, { SingleValue } from 'react-select';
import { selectStyles } from './styles';

export const CustomSelect = () => {
  const { selectedCurrency, currencies, setCurrency } = useCurrencyContext();

  const handleChange = (newValue: SingleValue<CurrencyValue>): void => {
    if (newValue) setCurrency(newValue);
  };

  return (
    <Select
      options={currencies}
      value={selectedCurrency}
      styles={selectStyles}
      onChange={handleChange}
      isMulti={false}
      isSearchable={false}
    />
  );
};
