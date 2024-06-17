import React from "react";
import Synonyms from "./Synonyms";
import styled from "styled-components";
import { pt_serif } from "../utils/fonts";

const H4 = styled.h4`
  margin: 1rem 0;
  font-size: 1.2rem;

  &:first-letter {
    text-transform: uppercase;
  }
`;

const Paragraph = styled.p`
  margin: 0 0 1rem;
  font-size: 1rem;

  &:first-letter {
    text-transform: uppercase;
  }
`;

const Subtitle = styled.h5`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  margin: 2rem 0 1rem;
`;

export default function Meaning(props) {
  return (
    <div>
      <H4 className={pt_serif.variable}>{props.meaning.partOfSpeech}</H4>
      <Paragraph>{props.meaning.definition}</Paragraph>
      <Subtitle>Examples</Subtitle>
      <em>{props.meaning.example}</em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
