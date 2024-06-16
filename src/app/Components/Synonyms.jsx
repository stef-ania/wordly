import React from "react";
import styled from "styled-components";
import { Nunito } from "next/font/google";

export const nunito = Nunito({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const StyledSubtitle = styled.h5`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  font-family: var(--font-nunito), sans-serif;
  margin: 2rem 0 1rem;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  & li {
    background-color: var(--light-grey);
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    font-family: var(--font-nunito), sans-serif;
    font-size: 1rem;
  }
`;

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <StyledSubtitle className={nunito.variable}>Synonyms:</StyledSubtitle>
        <StyledUl>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index} className={nunito.variable}>
                {synonym}
              </li>
            );
          })}
        </StyledUl>
      </div>
    );
  } else {
    return null;
  }
}
