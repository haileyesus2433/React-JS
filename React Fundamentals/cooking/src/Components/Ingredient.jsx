import React from 'react';

const Ingredient = (props) => {
  const {
    name,
    amount,
  } = props;
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  );
};

export default Ingredient;
