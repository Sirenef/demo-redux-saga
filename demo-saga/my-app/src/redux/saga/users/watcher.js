import { takeLatest } from "redux-saga/effects";
import { getUsers, addUsers, deleteUsers } from "@/redux/slice/users";
import { getUsersWorker, addUsersWorker, deleteUsersWorker } from "./worker";

export default function* usersWatcher() {
  yield takeLatest(getUsers.type, getUsersWorker);
  yield takeLatest(addUsers.type, addUsersWorker);
  yield takeLatest(deleteUsers.type, deleteUsersWorker);
}
