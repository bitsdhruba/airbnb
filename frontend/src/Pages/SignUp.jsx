import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSuccess } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';



const SignUp = () => {
  
  const [formData, setFormData] = useState({username:'', email : '', password : ''});
  const {loading , error} = useSelector((state)=> state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function changeHandler(e){
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    })
  }
  async function submitHandler(e){
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch('/auth/signup', 
      {
        method : 'POST',
        headers : {
          'Content-type' : 'application/json',
        },
        body : JSON.stringify(formData),
      });
      const response = await res.json();
      if(response.success ===false){
        dispatch(signInFailure(response.message));
        return
      }
      dispatch(signInSuccess(response));  
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }

  }
  
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-[30%] mt-[6rem] h-fit m-auto ">
        <h1 className="text-center text-2xl text-slate-600 mb-4">
          Create your Account
        </h1>
        <div className="flex justify-evenly">
          <span className="text-3xl text-center text-red-600 font-bold bg-slate-400 rounded-xl p-3 border border-solid border-slate-600">
            Sign up
          </span>
          <span className="text-3xl text-center text-red-600 font-bold border border-solid border-slate-600 rounded-xl p-3">
            <Link to="/login">Login</Link>
          </span>
        </div>

        <form className="m-3 flex flex-col items-center bg-slate-300 rounded-lg shadow-lg">
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
            value={formData.username}
            onChange={changeHandler}
            className="w-[80%] m-2 p-2 text-lg bg-slate-400 border-solid border-slate-500 border-1 rounded-lg"
          />
          <label htmlFor="email" className="w-[80%] text-lg m-2 text-left">
            {" "}
            Enter your email
          </label>
          <input
            type="text"
            placeholder="enter your email"
            name="email"
            id="email"
            value={formData.email}
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
            value={formData.password}
            onChange={changeHandler}
            className="w-[80%] m-2 p-2 text-lg bg-slate-400 border-solid border-slate-500 border-1 rounded-lg"
          />
          <button
            disabled={loading}
            className="w-[60%] text-lg m-2 p-2 rounded-lg border-solid border-1 border-slate-500 bg-red-400"
            onClick={submitHandler}
          >
            {loading ? "Loading..." : "SignUp"}
          </button>
          <button className="w-[80%] text-lg m-2 p-2 rounded-lg border-solid border-1 border-slate-500 bg-red-500">
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp
