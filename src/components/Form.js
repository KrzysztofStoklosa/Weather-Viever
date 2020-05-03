import React from "react";
const Form = (props) => {
  return (
    <>
      <form className="form" onSubmit={props.submit}>
        <input
          type="text"
          className="input"
          value={props.value}
          onChange={props.change}
        />
        <button class="btn btn-outline-success">Find</button>
      </form>
      <button onClick={props.click} class="btn btn-outline-danger">
        Reset
      </button>
    </>
  );
};

export default Form;
