import React from "react";
import styled from "styled-components";
import { pt_serif } from "../utils/fonts";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  flex-direction: column;
  gap: 1rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  line-height: 1.5rem;
  text-align: center;
  font-weight: 700;
`;

export default function Header() {
  return (
    <StyledHeader>
      <H1 className={pt_serif.className}>📕 Wordly</H1>
    </StyledHeader>
  );
}
