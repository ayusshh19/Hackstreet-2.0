import React, { useContext, useEffect, useState } from "react";
import Leftsidebar from "../components/Leftsidebar";
import Rightsidebar from "../components/Rightsidebar";
import { useDispatch, useSelector } from "react-redux";
import { innerchat, sendchat } from "../action/Chataction";
import { useAlert } from "react-alert";
import { CHAT_REQUEST } from "../constants/Chatconstant";

function Resutpage(props) {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
      })
      .catch((error) => {
        console.error("Unable to copy text to clipboard:", error);
      });
  };
  const [usersearch, setusersearch] = useState("");
  const dispatch = useDispatch();
  const {
    handleleftside,
    handlerightside,
    sethandleleftside,
    sethandlerightside,
    sethandlesearch,
    handlesearch,
  } = props.value;
  const alert = useAlert();
  const { loading, chatdata, currentid, prevchat } = useSelector(
    (state) => state.chat
  );
  const data = useSelector((state) => state);
  console.log(data);
  const handlesubmit = () => {
    if (usersearch.length > 0) {
      dispatch(sendchat(usersearch, currentid));
      sethandlesearch("");
      // navigate("/result");
    } else {
      alert.error("Invalid search prompt!");
    }
  };
  // useEffect(()=>{
  //   console.log(data)
  //   console.log("prev",prevchat);
  // },[prevchat,chatdata])
  return (
    <div className="bg-white [background:radial-gradient(300%_175%_at_50%_10%,#201F1F_40%,#22FF53_200%)] via-[#201F1F] to-[#201F1F] flex w-full h-screen relative">
      <Leftsidebar
        handleleftside={handleleftside}
        sethandleleftside={sethandleleftside}
      />
      <div class="inline-block h-full m-auto min-h-[1em] w-0.5 self-stretch bg-graytext opacity-100 dark:opacity-50"></div>

      <div className="w-full sm:w-3/5 p-5 flex justify-between text-4xl relative text-white sm:h-full overflow-auto  sm:mb-0">
        <div
          onClick={() => sethandleleftside(!handleleftside)}
          className="sm:hidden block absolute top-4"
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
        <div className="flex flex-col w-full h-9/10 sm:h-full justify-start  relative  overflow-auto  mt-8 sm:mt-0">
          <div className="h-4/5 flex flex-col overflow-auto p-5">
            {prevchat &&
              prevchat.map((data, index) => {
                if (index < prevchat.length - 1 && prevchat.length >0) {
                  return (
                    <div className=" flex flex-col mb-10 justify-start h-auto items-start">
                      <h1 className="text-xl sm:text-3xl h-10 mb-3 sm:mb-0 text-fillcomp font-semibold">
                        {data.user_response}
                      </h1>
                      <p className="text-sm h-4/5 sm:h-5/6 whitespace-pre-line  w-full" onClick={()=>copyToClipboard(chatdata[0]?.ai_response)}>
                        {data.ai_response}
                      </p>
                    </div>
                  );
                }
              })}
            {chatdata!=null && chatdata && (
              <div className=" flex flex-col justify-start relative h-auto items-start">

                <h1 className="text-xl sm:text-3xl sm:mb-0 mb-3 h-10 text-fillcomp font-semibold">
                  {chatdata[0]?.user_response}
                </h1>
                <p className="text-sm h-4/5 sm:h-5/6 relative whitespace-pre-line w-full" onClick={()=>copyToClipboard(chatdata[0]?.ai_response)}>
                  {chatdata[0]?.ai_response}
                </p> 
              </div>
            )}
          </div>
          <div className=" absolute w-full bottom-4 sm:left-[10%]  m-auto sm:w-4/5">
            <div className="w-full">
              <label for="hs-trailing-button-add-on-with-icon" class="sr-only">
                Label
              </label>
              <div class="flex rounded-lg z-20 shadow-sm border-2 border-graytext">
                <input
                  type="text"
                  id="hs-trailing-button-add-on-with-icon"
                  name="hs-trailing-button-add-on-with-icon"
                  placeholder="Example : “Why to become webdeveloper”"
                  onChange={(e) => setusersearch(e.target.value)}
                  class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 bg-gradient-to-r from-graytext opacity-50 to-darkbg"
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
        </div>
        <div
          onClick={() => {
            sethandlerightside(!handlerightside);
          }}
          className="sm:hidden block absolute right-4   "
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

export default Resutpage;
