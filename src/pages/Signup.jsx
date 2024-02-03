import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../action/Useraction";
import { CLEAR_ERRORS } from "../constants/Userconstants";
const Signup = () => {
  const dispatch = useDispatch();
  
  const alert = useAlert();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
  });
  const { name, email, password } = user;

  const registerSubmit = (e) => {
    dispatch(register(user))
  };
  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      // dispatch(clearErrors());
    }

    // if (isAuthenticated) {
    //   alert.success("register successful");
    //   navigate("/");
    // }
  }, [dispatch, error, alert, isAuthenticated]);
  const navigate = useNavigate()
  const movetologin = ()=>{
    navigate("/login")
  }
  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0 [background:radial-gradient(300%_175%_at_50%_10%,#201F1F_40%,#22FF53_200%)] via-[#201F1F] to-[#201F1F]">
      <div className="flex bg-[#171923] text-fillcomp rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-gray-600 text-xl font-bold">UrGPT</p>
          <p className="text-gray-600 my-4 text-4xl font-bold text-white">
            Sign up
          </p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="text"
              name="name"
              required
              value={name}
              onChange={registerDataChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
              name="email"
              value={email}
                    onChange={registerDataChange}
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              name="password"
              value={password}
              onChange={registerDataChange}
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>
          <div className="mt-8">
            <button className="bg-fillcomp hover:bg-outercol text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600" onClick={registerSubmit}>
              Sign up
            </button>
          </div>
          <div class="py-3 flex items-center text-sm text-gray-800 before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-gray-600 dark:after:border-gray-600 my-3">
            OR
          </div>
          <a
            href="#"
            className=" flex items-center justify-center mt-4 text-white rounded-xl border-2 shadow-md hover:bg-gray-100"
          >
            <div className="flex px-5 justify-center w-full py-3">
              <div className="min-w-[30px]">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <div className="flex w-full justify-center">
                <h1 className="whitespace-nowrap text-gray-600 font-bold">
                  Sign in with Google
                </h1>
              </div>
            </div>
          </a>
          <div className="mt-4 flex items-center w-full text-center">
            <a
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Already has an account ?
              <span className="text-blue-700 cursor-pointer" onClick={movetologin}> Log in</span>
            </a>
          </div>
        </div>
        <div className="hidden md:block lg:w-1/2 bg-cover text-white bg-fillcomp">
          <div className="w-full h-full flex flex-col items-center my-4">
            <div>
              <h1 className="flex"><svg class="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" className="mx-3">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="13" rx="2" width="4" height="6" />  <rect x="16" y="13" rx="2" width="4" height="6" />  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />  <path d="M18 19a6 3 0 0 1 -6 3" /></svg>  Support</h1>
            </div>
            <div className="w-2/3 h-1/3 bg-white m-auto rounded-lg flex">
              <div className="w-3/5 p-4 flex flex-col justify-center  gap-5">
                <h1 className="text-fillcomp text-xl font-bold">
                  Explore the Web with fingure tips
                </h1>
                <span className="bg-fillcomp w-4/5 text-center p-2 rounded-3xl">
                  Learn More
                </span>
              </div>
              <div className="w-2/5 flex justify-center items-center">
                <img
                  src="https://icones.pro/wp-content/uploads/2021/04/icone-internet-grise.png"
                  alt=""
                  srcset=""
                  className="w-full h-1/2 pr-2"
                />
              </div>
            </div>
            <div className="text-center h-1/3">
              <h1 className="text-2xl font-bold mb-4">Introducing new features</h1>
              <h4 className="text-sm">
                Webpage question answering system with integretion<br></br> with Ai
                kindly use and provide feedback
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
