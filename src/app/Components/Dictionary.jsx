"use client";
import React, { useState, useEffect } from "react";
import { getWordDefinition } from "../services/dictionaryAPI";
import styled from "styled-components";
import { pt_serif } from "../utils/fonts";
import { ScreenSizes } from "../utils/ScreenSizes";
import DictionaryForm from "./DictionaryForm";
import DictionaryResults from "./DictionaryResults";
import DictionaryPhotos from "./DictionaryPhotos";

const StyledSection = styled.section`
  max-width: 1024px;
  width: 100%;
  padding: 6rem 12rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: var(--box-shadow);

  @media only screen and (max-width: ${ScreenSizes.laptop}) {
    padding: 3rem 8rem;
    margin: 0 1rem;
  }

  @media only screen and (max-width: ${ScreenSizes.tablet}) {
    max-width: 100vw;
    padding: 2rem;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
`;

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [definitionData, setDefinitionData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialDefinition = async () => {
      setLoading(true);
      try {
        const data = await getWordDefinition(word);
        setDefinitionData(data);
        setError(null);
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message === "Word not found") {
          setError("Sorry, we couldn't find the word you're looking for. Please try searching for another word.");
        } else {
          setError("Sorry, we couldn't find the word you're looking for. Please try searching for another word.");
          console.log("Error fetching data");
        }
        setDefinitionData(null);
      } finally {
        setLoading(false);
      }
    };

    if (word) {
      fetchInitialDefinition();
    }
  }, [word]);

  const search = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledSection>
      <H2 className={pt_serif.className}>Which word would you like to search for?</H2>
      <DictionaryForm word={word} setWord={setWord} onSearch={search} />
      <DictionaryResults loading={loading} error={error} definitionData={definitionData} />
      <DictionaryPhotos word={word} />
    </StyledSection>
  );
}
