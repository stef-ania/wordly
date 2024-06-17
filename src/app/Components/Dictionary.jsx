"use client";
import React, { useState } from "react";
import { getWordDefinition } from "../services/dictionaryAPI";
import DefinitionData from "./DefinitionData.jsx";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
import { pt_serif } from "../utils/fonts";
import { ScreenSizes } from "../utils/ScreenSizes";

const StyledSection = styled.section`
  max-width: 60vw;
  width: 100%;

  @media only screen and (max-width: ${ScreenSizes.laptop}) {
    max-width: 80vw;
  }

  @media only screen and (max-width: ${ScreenSizes.tablet}) {
    max-width: 100vw;
    margin: 0 1rem;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
`;

const Form = styled.form`
  padding: 6rem 12rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem auto;

  @media (max-width: ${ScreenSizes.laptop}) {
    padding: 3rem 8rem;
  }

  @media (max-width: ${ScreenSizes.tablet}) {
    padding: 2rem;
  }
`;

const Article = styled.article`
  padding: 3rem 12rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2rem auto;
`;

const Label = styled.label`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
`;

const Input = styled.input`
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
  max-width: 768px;
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
      <Form onSubmit={search}>
        <H2 className={pt_serif.className}>Which word would you like to search for?</H2>
        <Label> Search </Label>
        <Input type="search" value={word} onChange={handleWordChange} placeholder="Type a word..."></Input>
      </Form>
      {error && <ErrorMessage message={error} />}
      {definitionData && (
        <Article>
          <DefinitionData definitionData={definitionData} />
        </Article>
      )}
    </StyledSection>
  );
}
