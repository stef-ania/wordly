import React from "react";

export default function DefinitionData(props) {
  console.log("here API response:", props.definitionData);
  if (props.definitionData) {
    return (
      <>
        <h3>{props.definitionData.word}:</h3>
        <em>Phonetic: {props.definitionData.phonetic}:</em>
        {props.definitionData.meanings.map(function (meaning, index) {
          return meaning.definitions;
        })}
      </>
    );
  } else {
    return null;
  }
}
