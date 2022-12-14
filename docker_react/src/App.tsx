import React, { useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
type Props = {};

function App({}: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/users", {
        name,
        email,
      });
      setResult(data);
      toast.success("user added");
    } catch (error) {
      const err = error as AxiosError;
      setResult(null);
      toast.error(String(err.response?.data));
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center mt-6">
        Dockerizing Mern Application Using Docker and Docker Compose
      </h1>
      <div>
        <h3 className="text-2xl text-center mt-8">Add User</h3>
        <form
          className="flex mt-6 items-center  flex-col space-y-4"
          onSubmit={handleFormSubmit}
        >
          <input
            className="border border-slate-400 p-2 rounded-md"
            placeholder="Enter Name"
            value={name}
            onChange={handleNameChange}
            type="text"
          />
          <input
            placeholder="Enter Email"
            value={email}
            className="rounded-md border border-slate-400 p-2"
            onChange={handleEmailChange}
            type="email"
          />
          <button
            type="submit"
            className="bg-purple-600 p-2 text-white rounded-lg"
          >
            Add User
          </button>
        </form>
      </div>
      <div className="flex justify-center mt-6">
        <pre>{result && JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
