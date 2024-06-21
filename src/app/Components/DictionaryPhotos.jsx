"use client";
import React from "react";
import styled from "styled-components";
import { pt_serif } from "../utils/fonts";

const PhotosTitle = styled.h3`
  margin-top: 4rem;
`;

const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: all ease-in-out 300ms;

  &:hover {
    box-shadow: var(--box-shadow);
    transition: var(--basic-transition);
    filter: brightness(120%);
  }
`;

const DictionaryPhotos = ({ photos }) => {
  return (
    <>
      <PhotosTitle className={pt_serif.className}>Some images as example:</PhotosTitle>
      <PhotosGrid>
        {photos.slice(0, 6).map((photo) => (
          <a key={photo.id} href={photo.url} target="_blank" rel="noopener noreferrer">
            <Photo src={photo.src.landscape} alt={photo.alt} />
          </a>
        ))}
      </PhotosGrid>
    </>
  );
};

export default DictionaryPhotos;
