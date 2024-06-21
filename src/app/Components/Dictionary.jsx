"use client";
import React, { useState, useEffect } from "react";
import { getWordDefinition } from "../services/dictionaryAPI";
import getPhotosDefinition from "../services/photosAPI";
import styled from "styled-components";
import { pt_serif } from "../utils/fonts";
import { ScreenSizes } from "../utils/ScreenSizes";
import DictionaryForm from "./DictionaryForm";
import DictionaryResults from "./DictionaryResults";
import DictionaryPhotos from "./DictionaryPhotos";

const StyledSection = styled.section`
  max-width: var(--max-width);
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

  @media only screen and (max-width: ${ScreenSizes.mobile}) {
    padding: 1.5rem;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 300;

  @media only screen and (max-width: ${ScreenSizes.mobile}) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
`;

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [definitionData, setDefinitionData] = useState(null);
  const [photoData, setPhotoData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialDefinition = async () => {
      setLoading(true);
      try {
        const data = await getWordDefinition(word);
        setDefinitionData(data);
        setError(null);

        const imageData = await getPhotosDefinition(word);
        setPhotoData(imageData);
        console.log("API SheCodesPexel response data for useEffect:", imageData);
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message === "Word not found") {
          setError("Sorry, we couldn't find the word you're looking for. Please try searching for another word.");
        } else {
          setError("Sorry, we couldn't find the word you're looking for. Please try searching for another word.");
          console.log("Error fetching data:", error);
        }
        setDefinitionData(null);
        setPhotoData(null);
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

      const imageData = await getPhotosDefinition(word);
      setPhotoData(imageData);
      console.log("API SheCodesPexel response data:", imageData);

      setError(null);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message === "Word not found") {
        setError("Sorry, we couldn't find the word you're looking for. Please try searching for another word.");
      } else {
        setError("Sorry, we couldn't find the word you're looking for. Please try searching for another word.");
        console.log("Error fetching data:", error);
      }
      setDefinitionData(null);
      setPhotoData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledSection>
      <H2 className={pt_serif.className}>Which word would you like to search for?</H2>
      <DictionaryForm word={word} setWord={setWord} onSearch={search} />
      <DictionaryResults loading={loading} error={error} definitionData={definitionData} />
      {photoData && photoData.photos && <DictionaryPhotos photos={photoData.photos} />}
    </StyledSection>
  );
}
