import React from "react";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

const StyledSynonyms = styled.div`
  margin: 2rem 0;
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
      <StyledSynonyms>
        <h5>Synonyms:</h5>
        <Ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{capitalizeFirstLetter(synonym)}</li>;
          })}
        </Ul>
      </StyledSynonyms>
    );
  } else {
    return null;
  }
}
