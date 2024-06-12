"use client";
import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(e) {
    e.preventDefault();
    alert(`searching for ${word}`);
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
