import React, { useEffect, useState } from "react";
import Leftsidebar from "../components/Leftsidebar";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/Baseurl";
import { useDispatch } from "react-redux";
import { CHAT_REQUEST, NEW_CHAT_ID } from "../constants/Chatconstant";
import { useAlert } from "react-alert";

function Playwithpdf() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const alert = useAlert()
  useEffect(()=>{
    dispatch({type:NEW_CHAT_ID,payload:2})
  },[])
  const handleFileChange =async (event) => {
    const file = event.target.files;
    const formData = new FormData();
    try {
      for (var i = 0; i < file.length; i++) {
        console.log(file[i])
        formData.append("files", file[i]);
      }
      console.log(formData)
      const url = `${BASE_URL}/upload_pdf`;
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        dispatch({type:CHAT_REQUEST})
        alert.success("Document uploaded successfully!")
        navigate("/mainpage")
      } else {
        console.error("Failed to upload PDFs:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading PDFs:", error);
    }
  };

  return (
    <div className="bg-white [background:radial-gradient(300%_175%_at_50%_10%,#201F1F_40%,#22FF53_200%)] via-[#201F1F] to-[#201F1F] flex w-full h-screen relative">
      <Leftsidebar />
      <div className="flex justify-center items-center w-full h-full">
        <div class="flex items-center justify-center w-1/3 bg-profilebg text-white rounded-lg">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-fillcomp border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-fillcomp "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">PDF</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Playwithpdf;
