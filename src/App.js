import React, { useState } from "react";
import Input from "./components/Input";

function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const [inputs, setInputs] = useState([
    {
      id: 1,
      placeholder: "name",
      type: "text",
      error: false,
      name: "name",
      error_msg: "blah blah blah"
    },
    {
      id: 2,
      placeholder: "email",
      type: "email",
      error: false,
      name: "email",
      error_msg: "blah blah blah"
    },
    {
      id: 3,
      placeholder: "password",
      type: "text",
      error: false,
      name: "password",
      error_msg: "blah blah blah"
    },
    {
      id: 4,
      placeholder: "password confirmation",
      type: "text",
      error: false,
      name: "password_confirmation",
      error_msg: "blah blah blah"
    }
  ]);

  function handleChange(e, inp) {
    console.log(inp);

    setValues({ ...values, [inp.name]: e.target.value });
    switch (inp.name) {
      case "name":
        if (values[inp.name].length < 4) {
          setInputs([...inputs, { ...inp, error: true }]);
        } else {
          setInputs([...inputs, { ...inp, error: false }]);
        }
        break;
      case "email":
        // code block
        break;
      case "password":
        // code block
        break;
      case "password_confirmation":
        // code block
        break;
      default:
      // code block
    }
  }

  return (
    <div className="App">
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          onChange={(e) => handleChange(e, input)}
        />
      ))}
    </div>
  );
}

export default App;
