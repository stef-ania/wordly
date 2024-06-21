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
  transition: var(--basic-transition);

  &:hover {
    border: 2px solid var(--accent-color);
    transition: var(--basic-transition);
  }
`;

export default function Phonetic({ phonetic, rate = 1, pitch = 1 }) {
  const [utterance, setUtterance] = useState(null);
  const [voices, setVoices] = useState([]);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isChrome = /chrome|chromium|crios/i.test(navigator.userAgent);

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

    setTimeout(() => {
      populateVoices();
    }, 1000);
  }, []);

  useEffect(() => {
    if (phonetic && voices.length > 0) {
      const synth = window.speechSynthesis;
      const u = new SpeechSynthesisUtterance(phonetic);

      let selectedVoice;

      if (isSafari) {
        selectedVoice = voices.find((voice) => voice.name === "Samantha");
      } else if (isChrome) {
        selectedVoice = voices.find((voice) => voice.name === "Nicky");
      }

      if (!selectedVoice) {
        selectedVoice = voices.find((voice) => voice.default);
      }

      if (selectedVoice) {
        u.voice = selectedVoice;
      } else {
        console.warn("Voice not found, using default.");
      }

      u.rate = rate;
      u.pitch = pitch;

      setUtterance(u);

      return () => {
        synth.cancel();
      };
    }
  }, [phonetic, voices, rate, pitch, isSafari, isChrome]);

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
