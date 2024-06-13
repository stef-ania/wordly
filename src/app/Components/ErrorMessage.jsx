import React from "react";
import styled from "styled-components";

const StyledErrorMessage = styled.p`
  background-color: #f0d3cf;
  border-radius: 12px;
  color: #b02711;
  font-weight: bold;
  margin-top: 2rem;
  padding: 1.5rem;
`;

export default function ErrorMessage({ message }) {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
}
