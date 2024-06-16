"use client";
import React, { useState } from "react";
import { getWordDefinition } from "../services/dictionaryAPI";
import DefinitionData from "./DefinitionData.jsx";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
import { Nunito } from "next/font/google";

export const nunito = Nunito({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const StyledSection = styled.section`
  max-width: 60vw;
  width: 100%;
`;

const StyledH3 = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  padding: 3rem 12rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem auto;
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  font-family: var(--font-nunito), sans-serif;
`;

const StyledInput = styled.input`
  background: #fff;
  border: 2px solid var(--middle-grey);
  border-radius: 6px;
  color: var(--text-color);
  display: inline-block;
  font-size: 1rem;
  height: 50px;
  line-height: 20px;
  padding: 15px 20px;
  margin: 0.5rem 0 1rem;
  width: 100%;
  transition: all ease-in-out 300ms;

  &::placeholder {
    color: var(--dark-grey);
  }

  &:focus {
    border-color: var(--text-color);
    box-shadow: 0 0 0 0.1rem var(--text-color);
    outline: 0;
    transition: all ease-in-out 300ms;
  }
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
      <StyledForm onSubmit={search}>
        <StyledH3>Which word would you like to search for?</StyledH3>
        <StyledLabel className={nunito.variable}> Search </StyledLabel>
        <StyledInput type="search" value={word} onChange={handleWordChange} placeholder="Type a word..."></StyledInput>
      </StyledForm>
      {error && <ErrorMessage message={error} />}
      {definitionData && (
        <div>
          <DefinitionData definitionData={definitionData} />
        </div>
      )}
    </StyledSection>
  );
}
