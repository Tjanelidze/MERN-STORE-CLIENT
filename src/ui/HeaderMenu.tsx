import styled from 'styled-components';

export default function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>Home</li>
      <li>Man</li>
      <li>Women</li>
      <li>About</li>
    </StyledHeaderMenu>
  );
}

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 5rem;

  & > li {
    cursor: pointer;
    font-weight: 600;
    position: relative;
  }

  & > li::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.2rem;
    width: 0;
    background-color: #22223b;
    transition: width 0.4s;
  }

  & > li:hover::after {
    width: 100%;
  }
`;
