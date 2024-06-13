import React from "react";
import Meaning from "./Meaning.jsx";

export default function DefinitionData(props) {
  return props.definitionData && props.definitionData.meanings && props.definitionData.meanings.length > 0 ? (
    <>
      <h3>{props.definitionData.word}:</h3>
      <em>Phonetic: {props.definitionData.phonetic}</em>
      {props.definitionData.meanings.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </>
  ) : (
    <p>Sorry, we couldn't find the word you're looking for. Please try searching for another word.</p>
  );
}
