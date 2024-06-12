"use client";
import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(e) {
    e.preventDefault();
    alert(`searching for ${word}`);
  }

  let API_KEY = `${process.env.NEXT_PUBLIC_API_KEY}`;

  let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${API_KEY}`;

  axios
    .get(apiURL)
    .then(handleResponse)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  function handleResponse(res) {
    console.log(res.data);
  }

  function handleWordChange(e) {
    console.log(e.target.value);
    setWord(e.target.value);
  }

  return (
    <>
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange}></input>
      </form>
    </>
  );
}
