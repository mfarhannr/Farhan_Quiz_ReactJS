import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayValue(inputValue);
  };

  return (
    <div>
      <form style={{ marginTop: 20 }}  onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>
      <p>You typed: {displayValue}</p>
    </div>
  );
};

export default Form;
