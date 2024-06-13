import React from "react";
import Meaning from "./Meaning.jsx";

export default function DefinitionData(props) {
  if (props.definitionData) {
    return (
      <>
        <h3>{props.definitionData.word}:</h3>
        <em>Phonetic: {props.definitionData.phonetic}:</em>
        {props.definitionData.meanings.map(function (meaning, index) {
          //   return meaning.definitions;
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </>
    );
  } else {
    return null;
  }
}
