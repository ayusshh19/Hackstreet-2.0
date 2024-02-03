import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletechattitle,
  getchatitle,
  titleTransfer,
} from "../action/Chataction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { CHAT_REQUEST } from "../constants/Chatconstant";

function Rightsidebar({ handlerightside, sethandlerightside }) {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, chatdata, error } = useSelector((state) => state.title);
  const { currentid } = useSelector((state) => state.chat);

  const titletransferhandle = (title) => {
    dispatch({type:CHAT_REQUEST})
    localStorage.removeItem("handletitle")
    dispatch(titleTransfer(title, currentid));
    navigate("/result");
  };

  const handledeletetitle = (title) => {
    dispatch(deletechattitle(title, currentid));
    dispatch(getchatitle(currentid));
    navigate("/mainpage");
  };

  useEffect(() => {
    console.log(currentid)
    dispatch(getchatitle(currentid));
    if (error) {
      alert.error(error);
    }
  }, []);
  return (
    <div
      className={`w-4/5 sm:w-1/5 h-full bg-darkbg sm:bg-opacity-0  ${
        handlerightside ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
      } ease-in-out fixed flex sm:static  sm:flex flex-col justify-between transition-all duration-1000   `}
    >
      <div className="p-2 relative h-full overflow-hidden">
        <div className="sm:flex justify-between items-center">
          <div
            className="absolute right-3 cursor-pointer sm:hidden block"
            onClick={() => sethandlerightside(!handlerightside)}
          >
            <svg
              class="h-8 w-8 text-white"
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
            className="text-white w-5/6 sm:w-full rounded-lg font-semibold p-2 mt-2 bg-fillcomp text-lg flex gap-2 justify-center cursor-pointer items-center"
            onClick={() => navigate("/mainpage")}
          >
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Chat
          </h1>
        </div>
        <h1 className="text-3xl text-white m-3">Chat List</h1>
        <div className="text-white h-full w-full overflow-auto flex flex-col gap-4 my-6 px-4 ">
          <div>
            {loading
              ? "loading"
              : Array.isArray(chatdata) &&
                chatdata.map((data) => {
                  return (
                    <>
                      <div
                        className="flex w-full justify-between items-center cursor-pointer px-2 py-2 text-white"
                        key={data.id}
                      >
                        <div onClick={() => titletransferhandle(data.title)}>
                          <h1>{data.title}</h1>
                          <p className=" text-xs text-graytext">Today</p>
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => handledeletetitle(data.title)}
                        >
                          <svg
                            class="h-6 w-6 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </div>
                      <hr class="border-outercol dark:border-outercol" />
                    </>
                  );
                })}
          </div>
        </div>
      </div>
      {/* <div className="p-5 ">
        <h1 className="text-white w-full rounded-lg font-semibold p-2  m-auto bg-deletebutton text-lg cursor-pointer flex gap-2 justify-center items-center">
          Clear All
        </h1>
      </div> */}
    </div>
  );
}

export default Rightsidebar;
