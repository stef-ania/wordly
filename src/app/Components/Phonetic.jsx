import React from "react";
// import styled from "styled-components";

// still WIP

export default function Phonetic(props) {
  return (
    <div>
      <span>
        <a href={props.phonetic.audio}> Listen </a>
      </span>
      <em>/{props.definitionData.phonetic}/</em>
    </div>
  );
}
