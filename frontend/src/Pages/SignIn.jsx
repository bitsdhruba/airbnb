import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  
  const [formData, setFormData] = useState({email : '', password : ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function changeHandler(e){
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    })
    
  }
  async function submitHandler(e){
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/auth/login',
      {
        method : 'POST',
        headers : {
          'content-type' : 'application/json',
        },
        body : JSON.stringify(formData),
      }
      );
      const response = await res.json();
      if(response.success === false){
        setLoading(false);
        setError(response.message);
        return
      }
      setLoading(false);
      setError(null);
      navigate('/')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }

  }
  
  return (
    <div>
      <div className="w-[30%] mt-[6rem] h-fit m-auto ">
        <h1 className='text-center text-2xl text-slate-600 mb-4'>Login to your account</h1>
        <div className="flex justify-evenly">
          <span className="text-3xl text-center text-red-600 font-bold border border-solid border-slate-600 rounded-xl p-3">
            <Link to="/signup">Sign up</Link>
          </span>
          <span className="text-3xl text-center text-red-600 font-bold bg-slate-400 rounded-xl p-3 border border-solid border-slate-600">
            Login
          </span>
        </div>
        <form
          className="m-3 flex flex-col items-center bg-slate-300 rounded-lg shadow-lg"
          onSubmit={submitHandler}
        >
          <label
            htmlFor="email"
            className="w-[80%] text-lg m-2 mt-[3rem] text-left"
          >
            {" "}
            Enter your email
          </label>
          <input
            type="text"
            placeholder="enter your user name"
            name="email"
            id="email"
            value={FormData.email}
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
            id="password"
            value={FormData.password}
            onChange={changeHandler}
            className="w-[80%] m-2 p-2 text-lg bg-slate-400 border-solid border-slate-500 border-1 rounded-lg"
          />
          <button className="w-[60%] text-lg m-2 p-2 rounded-lg border-solid border-1 border-slate-500 bg-red-400">
            {loading ? "Loading..." : "Login"}
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
