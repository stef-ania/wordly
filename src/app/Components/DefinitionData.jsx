import React from "react";
import Meaning from "./Meaning.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import styled from "styled-components";

const StyledH3 = styled.h3`
  margin: 1rem 0;
  font-size: 1.5rem;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export default function DefinitionData(props) {
  return props.definitionData && props.definitionData.meanings && props.definitionData.meanings.length > 0 ? (
    <>
      <StyledH3>{props.definitionData.word}</StyledH3>
      <em>/{props.definitionData.phonetic}/</em>
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
