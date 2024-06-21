import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <ThreeDots
      visible={true}
      height="60"
      width="60"
      color="#d05a23"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
      }}
    />
  );
}
