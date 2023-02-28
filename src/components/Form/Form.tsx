import { Input, Button } from 'components';
import { StyledForm, InputGroup } from './styles';

export const Form = () => {
  return (
    <StyledForm>
      <InputGroup>
        <Input placeholder="enter name ..." />
        <Input placeholder="enter cost ..." />
      </InputGroup>
      <Button />
    </StyledForm>
  );
};
