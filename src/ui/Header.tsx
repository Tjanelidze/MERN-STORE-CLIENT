import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  return (
    <StyledHeader>
      <img src="./images/logo.svg" alt="" />

      <HeaderMenu />

      <div>Authorization</div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4.5rem;

  & > img {
    width: 80px;
  }
`;
