import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  font-size: 1.2rem;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 2rem auto;
  /* 
  margin: 0rem auto 2rem;
  border-bottom: 1px solid var(--light-grey);
  padding: 1rem 0;
  background-color: #fff;
  box-shadow: var(--box-shadow); */
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>📕 WordlyPlus</h1>
    </StyledHeader>
  );
}
