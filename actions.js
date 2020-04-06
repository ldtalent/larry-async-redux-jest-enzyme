// ACTION TYPES
export const API_REQUEST = 'API_REQUEST';
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
export const GET_TODO_FAIL = 'GET_TODO_FAIL';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL';

//ACTION CREATORS
export const apiRequestAction = () => ({
    type: API_REQUEST
});

export const getTodoSuccess = todos => ({
    type: API_REQUEST,
    payload: todos
});

export const getTodosFail = error => ({
    type: GET_TODO_FAIL,
    payload: error
})

export const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: todo
})

export const addTodoFail = error => (
    {
        type: ADD_TODO_FAIL,
        payload: error
    }
)
