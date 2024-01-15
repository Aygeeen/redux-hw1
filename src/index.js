import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    num: 0,
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "DECREMENT":
            return {num: state.num + action.payload}
        case "INCREMENT":
            return {num: state.num - action.payload}
        default:
            return state
    }
}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

