"use client";
import React, { useState } from "react";
import { getWordDefinition } from "../services/dictionaryAPI";

export default function Dictionary() {
  let [word, setWord] = useState("");
  const [definitionData, setDefinitionData] = useState(null);
  const [error, setError] = useState(null);

  const search = async (e) => {
    e.preventDefault();
    try {
      const data = await getWordDefinition(word);
      setDefinitionData(data);
      console.log(data);
      setError(null);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message === "Word not found") {
        setError("Word not found.");
      } else {
        setError("Error fetching data");
      }
      setDefinitionData(null);
    }
  };

  function handleWordChange(e) {
    console.log(e.target.value);
    setWord(e.target.value);
  }

  return (
    <>
      <form onSubmit={search}>
        <input type="search" value={word} onChange={handleWordChange}></input>
      </form>
      {error && <p style={{ color: "red", fontSize: "90px" }}>{error}</p>}
      {definitionData && (
        <div>
          <h3>{definitionData.word}:</h3>
          <p>Phonetic: {definitionData.phonetic}:</p>
        </div>
      )}
    </>
  );
}
