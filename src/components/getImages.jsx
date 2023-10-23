import React, { useState, useEffect, useCallback } from "react";
import Image from "./Image";

const Images = (props) => {
  const { images } = props;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-4 mx-auto container mt-12">
      {images.map((image, index) => (
        <Image key={image.id} {...image} />
      ))}
    </div>
  );
};

export default Images;
