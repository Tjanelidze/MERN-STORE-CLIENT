import React from 'react';
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
  }
`;
