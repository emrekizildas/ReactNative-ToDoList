import { GET_TODO_LIST, ADD_TODO_LIST, DELETE_TODO_LIST, UPDATE_TODO_LIST } from '../Actions/types'; 

const INITIAL_STATE = {
    data: [],
    isCreate: false,
    isUpdate: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_TODO_LIST:
          return { ...state, data: action.payload, isCreate: false, isUpdate:false};
      case ADD_TODO_LIST:
        return { ...state, data: [...state.data, action.payload], isCreate: true, isUpdate: false};
      case UPDATE_TODO_LIST:
        return { ...state, data: action.payload, isCreate: false, isUpdate: true};
      case DELETE_TODO_LIST:
        return { ...state, data: action.payload, isCreate: false, isUpdate: false}  
      default:
        return state;
    }
  };