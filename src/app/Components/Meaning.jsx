import React from "react";
import Synonyms from "./Synonyms";
import styled from "styled-components";
import { pt_serif } from "../utils/fonts";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

const H4 = styled.h4`
  margin: 0 0 2rem;
  font-size: 1rem;
  font-weight: 300;

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

const Example = styled.div`
  margin: 2rem 0;
  border-left: 4px solid var(--middle-grey);
  padding: 0.5rem 1rem 1rem 1rem;
  background-color: var(--light-grey);
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
`;

const ExampleText = styled.em`
  &:first-letter {
    text-transform: uppercase;
  }
`;

export default function Meaning(props) {
  const { meaning } = props;

  return (
    <>
      <h5>Type:</h5>
      <H4>{props.meaning.partOfSpeech}</H4>
      <h5>Meaning:</h5>
      <Paragraph>{props.meaning.definition}.</Paragraph>
      {meaning.example && (
        <Example>
          <h5>Example:</h5>
          <ExampleText>"{capitalizeFirstLetter(meaning.example)}"</ExampleText>
        </Example>
      )}
      {meaning.synonyms && meaning.synonyms.length > 0 && <Synonyms synonyms={meaning.synonyms} />}
    </>
  );
}
