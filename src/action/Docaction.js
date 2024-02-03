import axios from "axios";
import { BASE_URL } from "../constants/Baseurl";
import { CHAT_FAIL, CHAT_REQUEST, CHAT_SUCCESS, DELETE_TITLE_FAIL, DELETE_TITLE_REQUEST, DELETE_TITLE_SUCCESS, TITLE_FAIL, TITLE_REQUEST, TITLE_SUCCESS } from "../constants/Chatconstant";


export const sendchat = (userprompt) => async (dispatch) => {
    try {
        dispatch({ type: CHAT_REQUEST });
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/chat/docqna`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "ngrok-skip-browser-warning": "any",
            },
            body: JSON.stringify({ prompt: userprompt })
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
            dispatch({ type: CHAT_SUCCESS, payload: finalstring });
        }
    } catch (error) {
        console.log(error)
        dispatch({ type: CHAT_FAIL, payload: error.response });
    }
};
export const innerchat = (userprompt) => async (dispatch) => {
    try {
        dispatch({ type: CHAT_REQUEST });
        const token = localStorage.getItem("token");
        const temp = await axios.get(
            `${BASE_URL}/get_titles/1`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    "ngrok-skip-browser-warning": "any",
                },
            }
        ).then(async (temp) => {
            console.log(temp)
            temp.data.reverse();
            console.log(temp.data[0])
            const data = await axios.get(
                `${BASE_URL}/get_titles/1`,
                { title: temp.data[0].title },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                        "ngrok-skip-browser-warning": "any",
                    },

                }
            );


            const response = await fetch(`${BASE_URL}/chat/docqna`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                        "ngrok-skip-browser-warning": "any",
                    },
                    body: JSON.stringify({ prompt: userprompt, title: data.title }),

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
        })


    } catch (error) {
        console.log(error)
        dispatch({ type: CHAT_FAIL, payload: error.response });
    }
};

export const getdoctitle = (userprompt) => async (dispatch) => {
    try {
        dispatch({ type: TITLE_REQUEST });
        const token = localStorage.getItem("token");
        const config = {
            withCredentials: true, headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "ngrok-skip-browser-warning": "any",
            },
        };
        // 1-Chat
        // 2- document
        // 3-web
        const data = await axios.get(
            `${BASE_URL}/get_titles/2`,
            config
        );
        console.log(data)

        dispatch({ type: TITLE_SUCCESS, payload: data.data });
    } catch (error) {
        console.log(error)
        dispatch({ type: TITLE_FAIL, payload: error.response });
    }
};


export const deletechattitle = (e, title) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_TITLE_REQUEST });
        const token = localStorage.getItem("token");
        const config = {
            withCredentials: true, headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "ngrok-skip-browser-warning": "any",
            },
        };

        const data = await axios.post(
            `${BASE_URL}/delete_conversation/1/`,
            { title: title },
            config
        );
        console.log(data)

        dispatch({ type: DELETE_TITLE_SUCCESS, payload: data.data });
    } catch (error) {
        console.log(error)
        dispatch({ type: DELETE_TITLE_FAIL, payload: error.response.message });
    }
};