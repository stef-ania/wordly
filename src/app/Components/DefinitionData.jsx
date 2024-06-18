import React from "react";
import Meaning from "./Meaning.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import styled from "styled-components";
import { pt_serif } from "../utils/fonts.js";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import Phonetic from "./Phonetic.jsx";

const H3 = styled.h3`
  margin: 0rem 0 1rem;
  font-size: 1.5rem;

  &:first-letter {
    text-transform: uppercase;
  }
`;

const Separator = styled.hr`
  margin: 3rem 0;
  border: 0;
  border-top: 2px solid var(--light-grey);
`;

export default function DefinitionData(props) {
  const { definitionData } = props;

  return props.definitionData && props.definitionData.meanings && props.definitionData.meanings.length > 0 ? (
    <>
      <h5>Searched word:</h5>
      <H3 className={pt_serif.className}>{capitalizeFirstLetter(props.definitionData.word)}</H3>

      <Phonetic phonetic={props.definitionData.word} voiceName="Google UK English Female" rate={1} pitch={1.2} />
      <em>/{props.definitionData.phonetic}/</em>

      {props.definitionData.meanings.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
          {index < definitionData.meanings.length - 1 && <Separator />}
        </div>
      ))}
    </>
  ) : (
    <ErrorMessage
      message={"Sorry, we couldn't find the word you're looking for. Please try searching for another word."}
    />
  );
}
