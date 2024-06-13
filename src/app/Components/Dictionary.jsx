"use client";
import React, { useState } from "react";
import { getWordDefinition } from "../services/dictionaryAPI";
import DefinitionData from "./DefinitionData.jsx";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 60vw;
  width: 100%;
  padding: 3rem;
  border: 1px solid red;
`;

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
        setError("Sorry, we couldn't find the word you're looking for. Please try searching for another word.");
      } else {
        setError("Sorry, we couldn't find the word you're looking for. Please try searching for another word.");
        console.log("Error fetching data");
      }
      setDefinitionData(null);
    }
  };

  function handleWordChange(e) {
    console.log(e.target.value);
    setWord(e.target.value);
  }

  return (
    <StyledSection>
      <h3>Which word would you like to search for?</h3>
      <form onSubmit={search}>
        <input type="search" value={word} onChange={handleWordChange} placeholder="Type a word..."></input>
      </form>
      {error && <ErrorMessage message={error} />}
      {definitionData && (
        <div>
          <DefinitionData definitionData={definitionData} />
        </div>
      )}
    </StyledSection>
  );
}
