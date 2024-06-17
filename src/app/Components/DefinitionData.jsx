import React from "react";
import Meaning from "./Meaning.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import styled from "styled-components";
import { pt_serif } from "../utils/fonts.js";

const H3 = styled.h3`
  margin: 0rem 0 1rem;
  font-size: 1.5rem;
  color: var(--accent-color);

  &:first-letter {
    text-transform: uppercase;
  }
`;

const Phonetic = styled.div`
  margin: 2rem 0;
`;
export default function DefinitionData(props) {
  return props.definitionData && props.definitionData.meanings && props.definitionData.meanings.length > 0 ? (
    <>
      <h5>Searched word:</h5>
      <H3 className={pt_serif.className}>{props.definitionData.word}</H3>

      <Phonetic>
        <span> Listen </span>
        <em>/{props.definitionData.phonetic}/</em>
      </Phonetic>

      {props.definitionData.meanings.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </>
  ) : (
    <ErrorMessage
      message={"Sorry, we couldn't find the word you're looking for. Please try searching for another word."}
    />
  );
}
