"use client";
import Dictionary from "./Components/Dictionary";
import Header from "./Components/Header.jsx";
import styled from "styled-components";

const StyledMain = styled.main`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <Dictionary defaultWord="Coffee" />
      </StyledMain>
    </>
  );
}
