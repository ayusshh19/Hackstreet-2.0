import {
  CHAT_FAIL,
  CHAT_REQUEST,
  CHAT_SUCCESS,
  DELETE_TITLE_SUCCESS,
  HANDLE_TTILES,
  LINK_FAIL,
  LINK_REQUEST,
  LINK_SUCCESS,
  NEW_CHAT,
  NEW_CHAT_ID,
  TITLE_FAIL,
  TITLE_REQUEST,
  TITLE_SUCCESS,
} from "../constants/Chatconstant";

export const Chatreducer = (
  state = { chatdata:[],prevchat:[], newchat: true, currentid: 1 },
  action
) => {
  switch (action.type) {
    case CHAT_SUCCESS:
    case DELETE_TITLE_SUCCESS:
      return {
        ...state,
        loading: false,
        chatdata: action.payload,
      };
    case HANDLE_TTILES:
      return {
        ...state,
        prevchat:action.payload,
      }
    case CHAT_REQUEST:
      return {
        ...state,
        loading: true,
        chatdata: null,
        prevchat:[]
      };
    case CHAT_FAIL:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case NEW_CHAT:
      console.log("newchat handle",action.payload)
      console.log(state)
      return {
        ...state,
        prevchat:[...state.prevchat,...action.payload],
      };
      case NEW_CHAT_ID:
        return {
          ...state,
          currentid:action.payload
        }

    default:
      return state;
  }
};

export const Titlereducer = (state = { title: {} }, action) => {
  switch (action.type) {
    case TITLE_SUCCESS:
      return {
        loading: false,
        chatdata: action.payload,
      };
    case TITLE_REQUEST:
      return {
        loading: true,
        chatdata: null,
      };
    case TITLE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const Linkreducer = (state = { title: {} }, action) => {
  switch (action.type) {
    case LINK_SUCCESS:
      return {
        loading: false,
        islinked:true,
      };
    case LINK_REQUEST:
      return {
        loading: true,
        islinked:false
      };
    case LINK_FAIL:
      return {
        loading: false,
        error: action.payload,
        islinked:false
      };
    default:
      return state;
  }
};
