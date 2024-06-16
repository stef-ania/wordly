import React from "react";
import Synonyms from "./Synonyms";
import styled from "styled-components";
import { Nunito } from "next/font/google";

export const nunito = Nunito({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const StyledH4 = styled.h4`
  margin: 1rem 0;
  font-size: 1.2rem;

  &:first-letter {
    text-transform: uppercase;
  }
`;

const StyledP = styled.p`
  margin: 0 0 1rem;
  font-size: 1rem;
  font-family: var(--font-nunito), sans-serif;

  &:first-letter {
    text-transform: uppercase;
  }
`;

const StyledSubtitle = styled.h5`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  font-family: var(--font-nunito), sans-serif;
  margin: 2rem 0 1rem;
`;

export default function Meaning(props) {
  return (
    <div>
      <StyledH4>{props.meaning.partOfSpeech}</StyledH4>
      <StyledP className={nunito.variable}>{props.meaning.definition}</StyledP>
      <StyledSubtitle className={nunito.variable}>Examples</StyledSubtitle>
      <em>{props.meaning.example}</em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
