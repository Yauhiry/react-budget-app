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
      onChange={handleChange}
      value={selectedCurrency}
      styles={selectStyles}
      isMulti={false}
      isSearchable={false}
    />
  );
};
