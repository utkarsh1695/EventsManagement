import { applyMiddleware, createStore } from "redux";
import ReduxLogger from "redux-logger";
import rootReducer from "./reducer";

const store = createStore(rootReducer, applyMiddleware(ReduxLogger));

export default store;
