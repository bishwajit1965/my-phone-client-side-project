import React from "react";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  const { id, name, price, description, image } = phone;
  return (
    <div>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Phone;
