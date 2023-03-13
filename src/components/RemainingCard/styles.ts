import styled from 'styled-components';

const StyledRemainingCard = styled.div<{ $isOverspanding: boolean }>`
  padding: 38px 20px;
  background: ${({ $isOverspanding }) => ($isOverspanding ? '#FF0000' : '#ccd5ff')};
  border-radius: 10px;
`;

const Text = styled.span<{ $isOverspanding: boolean }>`
  font-family: 'Inter';
  font-weight: ${({ $isOverspanding }) => ($isOverspanding ? 700 : 500)};
  font-size: 20px;
  line-height: 24px;
  color: ${({ $isOverspanding }) => ($isOverspanding ? '#FFFFFF' : '#000000')};
`;

export { StyledRemainingCard, Text };
