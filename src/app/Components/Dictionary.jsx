import React, { useState, useEffect, useRef } from "react";
import { getWordDefinition } from "../services/dictionaryAPI";
import DefinitionData from "./DefinitionData.jsx";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";
import { pt_serif } from "../utils/fonts";
import { ScreenSizes } from "../utils/ScreenSizes";
import { ThreeDots } from "react-loader-spinner";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem auto;
`;

const Label = styled.label`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 700;
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
  max-width: 480px;
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

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [definitionData, setDefinitionData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchInitialDefinition = async () => {
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

    fetchInitialDefinition();
  }, []);

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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
    }
  }, []);

  const handleWordChange = (e) => {
    console.log(e.target.value);
    setWord(e.target.value);
  };

  return (
    <StyledSection>
      <Form onSubmit={search}>
        <H2 className={pt_serif.className}>Which word would you like to search for?</H2>
        <Label> Search </Label>
        <Input
          ref={inputRef}
          type="search"
          value={word}
          onChange={handleWordChange}
          placeholder="Type a word..."
          autoFocus={true}
        ></Input>
      </Form>
      {loading ? (
        <ThreeDots
          visible={true}
          height="60"
          width="60"
          color="#d05a23"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        />
      ) : (
        <>
          {error && <ErrorMessage message={error} />}
          {definitionData && <DefinitionData definitionData={definitionData} />}
        </>
      )}
    </StyledSection>
  );
}
