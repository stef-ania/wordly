"use client";
import Image from "next/image";
import Dictionary from "./Components/Dictionary";
import Header from "./Components/Header.jsx";
import styled from "styled-components";

const StyledMain = styled.main`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <Dictionary />
      </StyledMain>
    </>
  );
}
