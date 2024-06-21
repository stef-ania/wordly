import React, { useEffect, useState } from "react";
import { getImageDefinition } from "../services/photosAPI";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
`;

const DictionaryImages = ({ word }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getImageDefinition(word);
        setImages(data.photos);
        setError(null);
      } catch (error) {
        setError("Error fetching images");
        setImages([]);
      }
    };

    if (word) {
      fetchImages();
    }
  }, [word]);

  return (
    <ImageContainer>
      {error && <p>{error}</p>}
      {images.length > 0 && images.map((image) => <Image key={image.id} src={image.src.medium} alt={image.alt} />)}
    </ImageContainer>
  );
};

export default DictionaryImages;
