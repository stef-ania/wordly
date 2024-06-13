import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
