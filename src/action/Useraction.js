import axios from "axios";

import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/Userconstants";
import { BASE_URL } from "../constants/Baseurl";

export const login = (username, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      console.log(username, password);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "any",
        }};
        console.log(BASE_URL)
      const  {data} = await axios.post(`${localStorage.getItem("BaseUrl")}/token/`,
        { username:username,password: password },
        config
      );
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("username", username);
  
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
      console.log(error)
      dispatch({ type: LOGIN_FAIL, payload: error.message });
    }
  };
  
  // Register
  export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
    const config = {headers: { "Content-Type": "application/json", "ngrok-skip-browser-warning": "any", } };
    
      const { name, email, password } = userData;
      console.log(userData)
      const  data  = await axios.post(`${BASE_URL}/register/`, {username:name,email:email,hashed_password:password}, config);
      console.log(data)
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      console.log(error)
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.message,
      });
    }
  };
  
  export const logout = () => async (dispatch) => {
    try {
      await axios.get(`${BASE_URL}/api/v1/logout`,{ withCredentials: true});
  
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
  };