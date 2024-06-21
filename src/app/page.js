"use client";
import Dictionary from "./Components/Dictionary";
import Header from "./Components/Header.jsx";
import styled from "styled-components";
import Footer from "./Components/Footer.jsx";
import { ScreenSizes } from "./utils/ScreenSizes";

const GlobalWrapper = styled.div`
  background-color: #f9f5ec;
  opacity: 0.8;
  background-image: radial-gradient(#eca685 1.1500000000000001px, transparent 1.1500000000000001px),
    radial-gradient(#eca685 1.1500000000000001px, #f9f5ec 1.1500000000000001px);
  background-size: 46px 46px;
  background-position: 0 0, 23px 23px;
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <GlobalWrapper>
      <Header />
      <StyledMain>
        <Dictionary defaultWord="Coffee" />
      </StyledMain>
      <Footer />
    </GlobalWrapper>
  );
}
