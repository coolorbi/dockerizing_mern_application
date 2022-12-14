import React, { useState } from "react";
import axios from "axios";

type Props = {};

function App({}: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleFormSubmit = 

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center mt-6">
        Dockerizing Mern Application Using Docker and Docker Compose
      </h1>
      <div>
        <h3 className="text-2xl text-center mt-8">Add User</h3>
        <form className="flex mt-6 items-center  flex-col space-y-4">
          <input
            className="border border-slate-400 p-2 rounded-md"
            placeholder="Enter Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            placeholder="Enter Email"
            value={email}
            className="rounded-md border border-slate-400 p-2"
            onChange={handleEmailChange}
          />
          <button className="bg-purple-600 p-2 text-white rounded-lg">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
