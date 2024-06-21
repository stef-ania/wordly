import React from "react";
import styled from "styled-components";

export default function Footer() {
  const StyledFooter = styled.footer`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Wrapper = styled.div`
    max-width: var(--max-width);
  `;

  const Link = styled.a`
    text-decoration: underline;
    transition: var(--basic-transition);
    &:hover {
      color: var(--accent-color);
      transition: var(--basic-transition);
    }
  `;

  return (
    <StyledFooter>
      <Wrapper>
        Project{" "}
        <Link href="https://github.com/stef-ania/wordly" target="_blank">
          open-sourced on GitHub{" "}
        </Link>
        by{" "}
        <Link href="https://github.com/stef-ania/" target="_blank">
          Stef
        </Link>
      </Wrapper>
    </StyledFooter>
  );
}
