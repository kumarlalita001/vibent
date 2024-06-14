import React from "react";
import { VscGithubInverted } from "react-icons/vsc";

const SignIn = () => {
  return (
    <form className="">
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email*"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password*"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
