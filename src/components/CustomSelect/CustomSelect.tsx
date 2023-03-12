import { useCurrencyContext } from 'context';
import { CurrencyValue } from 'context/CurrencyContext/types';

import Select, { SingleValue } from 'react-select';
import { selectStyles } from './styles';

export const CustomSelect = () => {
  const { selectedCurrency, currencies, changeCurrency } = useCurrencyContext();

  const handleChange = (option: SingleValue<CurrencyValue>): void => {
    if (option) changeCurrency(option);
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
