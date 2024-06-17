import React from "react";
import styled from "styled-components";

const Subtitle = styled.h5`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  margin: 2rem 0 1rem;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;

  & li {
    background-color: var(--light-grey);
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    font-size: 1rem;
  }
`;

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <Subtitle>Synonyms:</Subtitle>
        <Ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </Ul>
      </div>
    );
  } else {
    return null;
  }
}
