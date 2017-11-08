import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import Imagereducer from './reducers/ReducersImages/Images.js';

let store = createStore(Imagereducer);

ReactDOM.render( <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('app'));

// ReactDOM.render(<App/>,document.getElementById("app"))