import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga/rootsaga";
import usersReducer from "./slice/users";

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (gDM) => gDM().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);
export default store;
