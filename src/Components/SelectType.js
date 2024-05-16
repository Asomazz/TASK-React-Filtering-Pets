import React from "react";

const SelectType = ({ setType }) => {
  const handleSelect = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <br />
      Type:
      <select className="form-select" onChange={handleSelect}>
        <option value="" selected>
          All
        </option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </>
  );
};

export default SelectType;
