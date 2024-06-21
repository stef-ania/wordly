import React from "react";
import DefinitionData from "./DefinitionData";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

export default function DictionaryResults({ loading, error, definitionData }) {
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {error && <ErrorMessage message={error} />}
      {definitionData && <DefinitionData definitionData={definitionData} />}
    </>
  );
}
