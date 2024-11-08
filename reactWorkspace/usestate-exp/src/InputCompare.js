import React, { useState } from "react";

function InputCompare() {
  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
  });

  const { input1, input2 } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const Compare = () => {
    if (input1 === input2) {
      alert("일치합니다.");
    } else {
      alert("일치하지 않습니다.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      Compare();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="input1"
        value={input1}
        placeholder="첫번째 입력값"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <input
        type="text"
        name="input2"
        value={input2}
        placeholder="두번째 입력값"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <hr />
      <button onClick={Compare}>비교하기</button>
    </div>
  );
}

export default InputCompare;
