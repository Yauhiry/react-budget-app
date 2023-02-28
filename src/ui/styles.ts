import styled from 'styled-components';

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: #1e3542;
`;

const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  width: clamp(375px, 100%, 800px);
  padding: 30px 20px 50px;
  background: #ffffff;
`;

export { StyledApp, Container };
