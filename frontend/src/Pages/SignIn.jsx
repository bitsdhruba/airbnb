import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
  
  const [formData, setFormData] = useState({username : '', password : ''});
  function changeHandler(e){
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    })
    console.log(formData);
  }
  function submitHandler(e){
    e.preventDefault();
  }
  
  return (
    <div>
      <div className="w-[30%] mt-[6rem] h-fit m-auto ">
        <div className="flex justify-evenly">
          <span className="text-3xl text-center text-red-600 font-bold ">
            <Link to="/signup">Sign up</Link>
          </span>
          <span className="text-3xl text-center text-red-600 font-bold bg-slate-400 rounded-xl p-3">
            Login
          </span>
        </div>
        <form className="m-3 flex flex-col items-center bg-slate-300 rounded-lg shadow-lg" onSubmit={submitHandler}>
          <label
            htmlFor="username"
            className="w-[80%] text-lg m-2 mt-[3rem] text-left"
          >
            {" "}
            Enter your username
          </label>
          <input
            type="text"
            placeholder="enter your user name"
            name="username"
            id="username"
            value={FormData.username}
            onChange={changeHandler}
            className="w-[80%] m-2 p-2 text-lg bg-slate-400 border-solid border-slate-500 border-1 rounded-lg"
          />
          <label htmlFor="password" className="w-[80%] text-lg m-2 text-left">
            {" "}
            Enter your password
          </label>
          <input
            type="text"
            placeholder="enter your password"
            name="password"
            id = "password"
            value={FormData.password}
            onChange={changeHandler}
            className="w-[80%] m-2 p-2 text-lg bg-slate-400 border-solid border-slate-500 border-1 rounded-lg"
          />
          <button className="w-[60%] text-lg m-2 p-2 rounded-lg border-solid border-1 border-slate-500 bg-red-400">
            Login
          </button>
          <button className="w-[80%] text-lg m-2 p-2 rounded-lg border-solid border-1 border-slate-500 bg-red-500">
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn
