import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  font-size: 1.2rem;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 2rem auto;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>📕 WordlyPlus</h1>
    </StyledHeader>
  );
}
