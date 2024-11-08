import React, { useEffect, useReducer } from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
    </div>
  );
};

export default Info;
