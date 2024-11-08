import React, { useReducer, useEffect } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const initialState = {
  name: "",
  email: "",
};

const FormHandler = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    console.log("입력값 변경 : ", state);
  }, [state]);

  useEffect(() => {
    console.log("데이터 로딩 중 ...");
    const timer = setTimeout(() => {
      console.log("데이터 로딩 완료");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
    alert("초기화 완료");
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        value={state.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="이메일"
        value={state.email}
        onChange={handleChange}
      />
      <button onClick={handleReset}>초기화</button>
    </div>
  );
};

export default FormHandler;
