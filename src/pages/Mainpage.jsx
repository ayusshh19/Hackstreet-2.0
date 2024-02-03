import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Leftsidebar from "../components/Leftsidebar";
import Rightsidebar from "../components/Rightsidebar";
import { useDispatch, useSelector } from "react-redux";
import { getchatitle, sendchat } from "../action/Chataction";
import { NEW_CHAT_ID } from "../constants/Chatconstant";
import { useAlert } from "react-alert";

function Mainpage(props) {
  const navigate = useNavigate();
  const alert = useAlert();
  const {
    handleleftside,
    handlerightside,
    sethandleleftside,
    sethandlerightside,
    sethandlesearch,
  } = props.value;
  const [usersearch, setusersearch] = useState("");
  const { currentid, error } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const test = useSelector((state)=>state)
  console.log(test)
  const handlesubmit = () => {
    if (usersearch.length > 0) {
      localStorage.removeItem("handletitle")
      dispatch(sendchat(usersearch, currentid));
      sethandlesearch(usersearch);
      navigate("/result");
    } else {
      alert.error("Invalid Prompt input");
    }
  };
  return (
    <div className="bg-white [background:radial-gradient(300%_175%_at_50%_10%,#201F1F_40%,#22FF53_200%)] via-[#201F1F] to-[#201F1F] flex w-full h-screen relative overflow-auto">
      <Leftsidebar
        handleleftside={handleleftside}
        sethandleleftside={sethandleleftside}
      />
      <div class="inline-block h-full m-auto min-h-[1em] w-0.5 self-stretch bg-graytext opacity-100 dark:opacity-50"></div>
      <div className="w-full sm:w-3/5 p-5 flex justify-between text-4xl text-white sm:h-full overflow-auto mb-6 sm:mb-0">
        <div
          onClick={() => sethandleleftside(!handleleftside)}
          className="sm:hidden block"
        >
          <svg
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center gap-10 mt-12 sm:mt-0">
          <div>
            <h1 className="text-6xl my-4 text-center ">
              Welcome to{" "}
              <span className=" border-l-2 p-1 border-innercol  bg-gradient-to-r from-fillcomp to-darkbg">
                UrGPT
              </span>
            </h1>
            <p className="text-sm text-center">
              The power of AI at your service - Tame the knowledge !
            </p>
          </div>
          <div className=" w-full sm:w-4/5">
            <div className="w-full">
              <label for="hs-trailing-button-add-on-with-icon" class="sr-only">
                Label
              </label>
              <div class="flex rounded-lg shadow-sm border-2 border-graytext">
                <input
                  type="text"
                  id="hs-trailing-button-add-on-with-icon"
                  name="hs-trailing-button-add-on-with-icon"
                  placeholder="Example : “Why to become webdeveloper”"
                  class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 bg-gradient-to-r from-graytext opacity-50 to-darkbg"
                  onChange={(e) => setusersearch(e.target.value)}
                />
                <button
                  type="button"
                  class="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center m-1 gap-x-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 bg-fillcomp dark:focus:ring-gray-600 rounded-lg"
                  onClick={handlesubmit}
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
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-evenly items-center flex-wrap gap-8 sm:gap-2">
            <div className="flex flex-col justify-center items-center text-center">
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h1 className="text-xl">Clear and precise</h1>
              <p className="text-sm">
                Pariatur sint laborum cillum <br></br> aute consectetur irure.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h1 className="text-xl">Personalized answers</h1>
              <p className="text-sm">
                Pariatur sint laborum cillum <br></br> aute consectetur irure.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h1 className="text-xl">PDF Question answering</h1>
              <p className="text-sm">
                Pariatur sint laborum cillum <br></br> aute consectetur irure.
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            sethandlerightside(!handlerightside);
          }}
          className="sm:hidden block"
        >
          <svg
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
      </div>
      <div class="inline-block h-full m-auto min-h-[1em] w-0.5 self-stretch bg-graytext opacity-100 dark:opacity-50"></div>
      <Rightsidebar
        handlerightside={handlerightside}
        sethandlerightside={sethandlerightside}
      />
    </div>
  );
}

export default Mainpage;
