import React from "react";

const Carta = ({ nome, prezzo }) => {
  return (
    <>
      <h1>{nome}</h1>
      <h2>{prezzo}</h2>
    </>
  );
};

export default Carta;
