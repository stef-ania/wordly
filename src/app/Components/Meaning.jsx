import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <p>{props.meaning.example}</p>
      <ul>
        <li>{props.meaning.synonyms}</li>
      </ul>
    </div>
  );
}
