"use client";
import React from "react";
import styled from "styled-components";

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
  box-shadow: var(--box-shadow);
`;

const DictionaryPhotos = ({ photos }) => {
  return (
    <PhotosGrid>
      {photos.slice(0, 6).map((photo) => (
        <a key={photo.id} href={photo.url} target="_blank" rel="noopener noreferrer">
          <Photo src={photo.src.landscape} alt={photo.alt} />
        </a>
      ))}
    </PhotosGrid>
  );
};

export default DictionaryPhotos;
