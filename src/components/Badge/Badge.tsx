import { StyledBadge } from './styles';
import { Expense } from 'context/ExpensesContext/types';

interface BadgeProps extends Pick<Expense, 'cost'> {}

export const Badge = ({ cost }: BadgeProps) => {
  return <StyledBadge>${cost}</StyledBadge>;
};
