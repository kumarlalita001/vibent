import React, { useState } from "react";
import { VscGithubInverted } from "react-icons/vsc";

const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = (e) => {
    e.preventDefault();

    console.log(inputs);
  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="mb-4">
        <input
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          type="email"
          placeholder="Email*"
          className="w-full bg-inherit px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mb-4">
        <input
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          type="password"
          placeholder="Password*"
          className="w-full px-4 bg-inherit py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-green-500 text-white rounded-md"
      >
        Sign in
      </button>
    </form>
  );
};

export default SignIn;
