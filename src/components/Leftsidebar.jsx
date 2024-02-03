import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CHAT_REQUEST, NEW_CHAT_ID } from "../constants/Chatconstant";
import { LOGOUT_SUCCESS } from "../constants/Userconstants";

function Leftsidebar({ handleleftside, sethandleleftside }) {
  const navigate = useNavigate();
  const user = localStorage.getItem("username");
  const dispatch =useDispatch()
  const logout = () =>{
    localStorage.removeItem("token")
    localStorage.removeItem("handletitle")
    localStorage.removeItem("username")
    dispatch({type:LOGOUT_SUCCESS})
    navigate("/login")
  }
  const handlemainpage = ()=>{
    dispatch({type:NEW_CHAT_ID,payload:1})
    dispatch({type:CHAT_REQUEST})
    navigate("/mainpage");
  }
  return (
    <div
      className={`w-4/5 sm:w-1/5 h-full bg-darkbg sm:bg-opacity-0  ${
        handleleftside ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
      } ease-in-out fixed flex sm:static z-10 sm:flex flex-col justify-between transition-all duration-1000   `}
    >
      <div className="p-5 relative ">
        <div
          className="absolute right-4 cursor-pointer sm:hidden block"
          onClick={() => sethandleleftside(!handleleftside)}
        >
          <svg
            class="h-6 w-6 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <h1
          className="text-fillcomp text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          UrGPT
        </h1>
        <div className="text-white flex flex-col gap-4 my-6 ">
          <div className="flex cursor-pointer" onClick={() => navigate("/pdf")}>
            <svg
              class="h-6 w-6 text-white mr-3"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
              <rect x="7" y="7" width="3" height="9" />{" "}
              <rect x="14" y="7" width="3" height="5" />
            </svg>
            PDF Question Answering
          </div>
          <div className="flex cursor-pointer" onClick={() => navigate("/webpage")}>
            <svg
              class="h-6 w-6 mr-3 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="10" cy="10" r="7" />{" "}
              <line x1="8" y1="8" x2="12" y2="12" />{" "}
              <line x1="12" y1="8" x2="8" y2="12" />{" "}
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
            Web Based Answering
          </div>
          <div className="flex cursor-pointer" onClick={handlemainpage}>
            <svg
              class="h-6 w-6 mr-3 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Chat Based Answering
          </div>
          <hr class="h-px my-2 bg-graytext border-0 dark:bg-gray-700"></hr>
          <div className="flex cursor-pointer" onClick={logout}>
            <svg
              class="h-6 w-6 text-white mr-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
              <path d="M20 12h-13l3 -3m0 6l-3 -3" />
            </svg>
            Logout
          </div>
        </div>
      </div>
      <div className="w-3/4 rounded-lg mx-auto my-10 flex justify-between shadow-lg bg-profilebg px-3 py-3 text-white ">
        <div className="w-3/4 flex flex-wrap break-words break-all">
          <h1>{user}</h1>
          {/* <p className="text-graytext text-xs">{user}</p> */}
        </div>
        <div className=" bg-fillcomp rounded-md font-semibold w-12 p-3 flex justify-center items-center h-6">
          <p>Free</p>
        </div>
      </div>
    </div>
  );
}

export default Leftsidebar;
