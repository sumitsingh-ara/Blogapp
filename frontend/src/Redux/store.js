import {
  legacy_createStore as createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

const rootReducer = combineReducers({});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
