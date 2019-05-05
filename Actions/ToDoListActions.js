import { AsyncStorage } from 'react-native'; 

import {
    GET_TODO_LIST,
    ADD_TODO_LIST,
    DELETE_TODO_LIST,
    UPDATE_TODO_LIST
} from './types';

export const getTodoList = () => {
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, result) => {
            if(result != null) {
                const array = JSON.parse(result);
                dispatch({
                    type: GET_TODO_LIST,
                    payload: array
                });
            }
          });
      
    };
};


export const addTodoList = (params) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO_LIST,
            payload: params
        });
    };
};

export const updateTodoList = (data) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_TODO_LIST,
            payload: data
        });
    };
};

export const deleteTodoList = (array) => {
    return (dispatch) => {
        AsyncStorage.setItem('data', JSON.stringify(array));
        dispatch({
            type: DELETE_TODO_LIST,
            payload: array
        });
    };
};