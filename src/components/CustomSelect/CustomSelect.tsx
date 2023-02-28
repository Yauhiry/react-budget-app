import Select from 'react-select';
import { selectStyles } from './styles';

const options = [{ value: 'usd', label: 'USD' }];

export const CustomSelect = () => {
  return (
    <Select options={options} styles={selectStyles} defaultValue={options[0]} />
  );
};
