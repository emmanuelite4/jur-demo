import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";
import rootReducer from "./root.reducer";
// import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import history from "../history";

const sagaMiddleware = createSagaMiddleware();
// export const history = createBrowserHistory();

const store = configureStore({
  reducer: rootReducer(history),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(routerMiddleware(history))
      .concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
