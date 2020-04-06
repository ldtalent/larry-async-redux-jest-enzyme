import axios from 'axios';
import * as actions from './actions';

export const getTodos = () => async (dispatch) => {
    dispatch(actions.apiRequest());
    await axios.get('api/todos').then(res => {
        dispatch(actions.getTodoSuccess(res.data));
        return res;
    })
        .catch(error => {
            dispatch(actions.getTodosFail(error));
            return error
        });
};

export const addTodo = () => async (dispatch) => {
    dispatch(actions.apiRequest());
    await axios.post('api/todos').then(res => {
        dispatch(actions.addTodoSuccess(res.data));
        return res;
    })
        .catch(error => {
            dispatch(actions.addTodoFail(error));
            return error
        })
}