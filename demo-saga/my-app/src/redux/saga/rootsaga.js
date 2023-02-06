import { all, fork } from "redux-saga/effects";
import usersWatcher from "./users/watcher";

export default function* rootSaga() {
  yield all([fork(usersWatcher)]);
}
