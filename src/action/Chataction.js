import axios from "axios";
import { BASE_URL } from "../constants/Baseurl";
import { CHAT_FAIL, CHAT_REQUEST, CHAT_SUCCESS, DELETE_TITLE_FAIL, DELETE_TITLE_REQUEST, DELETE_TITLE_SUCCESS, HANDLE_TTILES, LINK_FAIL, LINK_REQUEST, LINK_SUCCESS, TITLE_FAIL, TITLE_REQUEST, TITLE_SUCCESS } from "../constants/Chatconstant";
import { useDispatch, useSelector } from "react-redux";

function format(data) {
  const res = data
  const codeRegex = /```([\s\S]*?)```/g
  const formattedResponse = res.replace(
    codeRegex,
    (_, code) => `<pre>${code}</pre>`
  )
  return formattedResponse
}

const get_latest_title = (currentid) => {
  const url = BASE_URL + `/get_titles/${currentid}`;
  const token = localStorage.getItem("token")

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "ngrok-skip-browser-warning": "any",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data && data.length > 0) {
        data.reverse();
        return data[0].title;
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error("Error fetching latest title:", error);
      return null;
    });
};

export const titleTransfer = (title,currentid) => async (dispatch) => {
  try {
    console.log(title);
    const token = localStorage.getItem("token")
    const url = BASE_URL + `/get_data/${currentid}/`;
    const { data } = await axios.post(url,
      { title: title },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
    console.log("kuch print karo ",data)
    dispatch({ type: HANDLE_TTILES, payload: data })
  } catch (error) {
    console.log(error)
    dispatch({ type: CHAT_FAIL, payload: error.response });
  }
};

export const sendchat = (userprompt, currentid) => async (dispatch) => {
  try {
    dispatch({ type: CHAT_REQUEST });
    const token = localStorage.getItem("token");

    let url;
    if (currentid === 1) {
      url = `${BASE_URL}/chat/`
    }
    else if (currentid === 2) {
      url = `${BASE_URL}/chat/docqna/`
    }
    else {
      url = `${BASE_URL}/chat/webqna/`
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "any",
      },
      body: localStorage.getItem("handletitle") ? JSON.stringify({ prompt: userprompt, title: localStorage.getItem("handletitle") }) : JSON.stringify({ prompt: userprompt })
    });

    let finalstring = " "
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");


    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      const decodedValue = decoder.decode(value);
      finalstring += decodedValue
      console.log(finalstring)
      dispatch({ type: CHAT_SUCCESS, payload: [{ user_response: userprompt, ai_response: finalstring }] });
    }
    finalstring=format(finalstring);
    dispatch({ type: CHAT_SUCCESS, payload: [{ user_response: userprompt, ai_response: finalstring }] });



    var temp = await get_latest_title(currentid);
    console.log(temp)
    localStorage.setItem("handletitle", temp)
    const urldata = BASE_URL + `/get_data/${currentid}/`;
    const { data } = await axios.post(urldata,
      { title: temp },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
    dispatch({ type: HANDLE_TTILES, payload: data })



  } catch (error) {
    console.log(error)
    dispatch({ type: CHAT_FAIL, payload: error.response });
  }
};



export const innerchat = (userprompt, currentid) => async (dispatch) => {
  try {
    dispatch({ type: CHAT_REQUEST });
    const token = localStorage.getItem("token");
    let url;
    if (currentid === 1) {
      url = `${BASE_URL}/chat`
    }
    else if (currentid === 2) {
      url = `${BASE_URL}/chat/docqna`
    }
    else {
      url = `${BASE_URL}/chat/webqna`
    }

    const response = await fetch(url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "any",
        },
        body: JSON.stringify({ prompt: userprompt, title: data[0].title }),

      });


    let finalstring = " "
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      const decodedValue = decoder.decode(value);
      finalstring += decodedValue
      dispatch({ type: CHAT_SUCCESS, payload: finalstring });
    }
    let finaloutput = format(finalstring)
    dispatch({ type: CHAT_SUCCESS, payload: finaloutput });



  } catch (error) {
    console.log(error)
    dispatch({ type: CHAT_FAIL, payload: error.message });
  }
};



export const getchatitle = (currentid) => async (dispatch) => {
  try {
    dispatch({ type: TITLE_REQUEST });
    const token = localStorage.getItem("token");
    console.log("current", currentid)
    const config = {
       headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "any",
      },
    };
    const  {data}  = await axios.get(
      `${BASE_URL}/get_titles/${currentid}`,
      config
    );
    console.log("title data", data)
    dispatch({ type: TITLE_SUCCESS, payload: data });
  } catch (error) {
    console.error(error.message)
    dispatch({ type: TITLE_FAIL, payload: error.message });
  }
};


export const deletechattitle = (title, currentid) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TITLE_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "any",
      },
    };

    const data = await axios.post(
      `${BASE_URL}/delete_conversation/${currentid}/`,
      { title: title },
      config
    );

    dispatch({ type: DELETE_TITLE_SUCCESS, payload: data.data });
  } catch (error) {
    console.log(error)
    dispatch({ type: DELETE_TITLE_FAIL, payload: error.message });
  }
};


export const weblinkhandle = (userlink) => async (dispatch) => {
  try {
    dispatch({ type: LINK_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "any",
      },
    };
    const data = await axios.post(
      `${BASE_URL}/set_link/`,
      { urls: [userlink] },
      config
    );
    console.log(data)

    dispatch({ type: LINK_SUCCESS, payload: data.data });
  } catch (error) {
    console.log(error)
    dispatch({ type: LINK_FAIL, payload: error.message });
  }
};