import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './actions';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

describe('getTodos actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('dispatches GET_TODO_SUCCESS after a successfull API requets', () => {
        mock.onGet('api/todos').reply(200, { response: [{ item: 'item1' }, { item: 'item2' }] })
        store.dispatch(actions.getTodos()).then(() => {
            let expectedActions = [
                { type: 'API_REQUEST' },
                {
                    type: 'GET_TODOS_SUCCESS',
                    payload: [{ item: 'item1' }, { item: 'item2' }]
                }
            ]
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('dispatches GET_TODO_FAILURE after a FAILED API requets', () => {
        mock.onGet('api/todos').reply(400, { error: { message: 'error message' } });
        store.dispatch(actions.getTodos()).then(() => {
            let expectedActions = [
                { type: 'API_REQUEST' },
                {
                    type: 'GET_TODOS_FAIL',
                    payload: { error: { message: 'error message' } }
                }
            ]
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
});

describe('post Todos actions', () => {
    beforeEach(() => {
        store.clearActions();
    });
    it('dispatches POST_TODO_SUCCESS after a successfull API requets', () => {
        mock.onPost('api/todos').reply(201, { response: { item: 'item1' } })
        store.dispatch(actions.getTodos()).then(() => {
            let expectedActions = [
                { type: 'API_REQUEST' },
                { type: 'POST_TODOS_SUCCESS', payload: { item: 'item1' } }
            ]
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('dispatches POST_TODO_FAILURE after a FAILED API requets', () => {
        mock.onPost('api/todos').reply(400, { error: { message: 'error message' } });
        store.dispatch(actions.getTodos()).then(() => {
            let expectedActions = [
                { type: 'API_REQUEST' },
                {
                    type: 'POST_TODOS_FAIL',
                    payload: { error: { message: 'error message' } }
                }
            ]
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
});