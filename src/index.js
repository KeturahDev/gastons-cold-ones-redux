import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {Provider} from "react-redux"
import {createStore} from "redux"
import rootReducer from "./reducers"
import {Kegs} from "./PresetData/GasonsKegs"

const store = createStore(rootReducer, {kegList: Kegs}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//coming back from lunch:
//after sort is subsided check to see if redux aditions are compiling
//map state to props
//sort not working becuase database is now an object full of objects attach to keys.. how can I sort? should I do away with sorting? can you sort by key values of an OBJECT
//replace instances of setState with getState... refer to bean proj?

