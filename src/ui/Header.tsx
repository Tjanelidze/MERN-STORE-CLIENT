import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingBag } from 'react-icons/md';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <img className="logo" src="./images/logo.svg" alt="" />
      </Link>

      <HeaderMenu />

      <div className="user-controls">
        Authorization
        <MdOutlineShoppingBag size={30} />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 4.5rem;
  background-color: transparent;

  .logo {
    display: block;
    width: 75px;
    cursor: pointer;
  }

  .user-controls {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;
