"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid var(--middle-grey);
  padding: 0.5rem 1.5rem;
  border-radius: 3rem;
  background-color: #fff;
  color: var(--accent-color);
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all ease-in-out 300ms;

  &:hover {
    border: 2px solid var(--accent-color);
    transition: all ease-in-out 300ms;

    &:active {
      background-color: var(--accent-color);
      color: #fff;
      border: 2px solid var(--accent-color);
      transition: all ease-in-out 300ms;
    }
  }
`;

export default function Phonetic({ phonetic, voiceName = "Google US English", rate = 1, pitch = 1 }) {
  const [utterance, setUtterance] = useState(null);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const synth = window.speechSynthesis;

    const populateVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
    };

    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = populateVoices;
    }

    populateVoices();
  }, []);

  useEffect(() => {
    if (phonetic && voices.length > 0) {
      const synth = window.speechSynthesis;
      const u = new SpeechSynthesisUtterance(phonetic);

      const selectedVoice = voices.find((voice) => voice.name === voiceName);
      if (selectedVoice) {
        u.voice = selectedVoice;
      }

      u.rate = rate;
      u.pitch = pitch;

      setUtterance(u);

      return () => {
        synth.cancel();
      };
    }
  }, [phonetic, voices, voiceName, rate, pitch]);

  const handlePlay = () => {
    if (utterance) {
      const synth = window.speechSynthesis;
      synth.speak(utterance);
    }
  };

  return (
    <div>
      <StyledButton onClick={handlePlay}>{"Listen"}</StyledButton>
    </div>
  );
}
