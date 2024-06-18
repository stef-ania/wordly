"use client";
import React, { useState, useEffect } from "react";
// import styled from "styled-components";

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
      <button onClick={handlePlay}>{"Listen"}</button>
    </div>
  );
}
