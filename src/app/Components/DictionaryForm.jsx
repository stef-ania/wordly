"use client";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

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
  color: var(--dark-grey);
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

export default function DictionaryForm({ word, setWord, onSearch }) {
  const [inputValue, setInputValue] = useState(word);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
    }
  }, []);

  const handleWordChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(inputValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label> Search </Label>
      <Input
        ref={inputRef}
        type="search"
        value={inputValue}
        onChange={handleWordChange}
        placeholder="Type a word..."
        autoFocus={true}
      />
    </Form>
  );
}
