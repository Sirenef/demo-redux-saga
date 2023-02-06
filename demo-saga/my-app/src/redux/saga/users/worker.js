import { call, put } from "redux-saga/effects";
import { getUsers, setUsers } from "@/redux/slice/users";
import { addUserApi, deleteUserApi, getUserApi } from "@/api/instance";

export function* getUsersWorker() {
  try {
    const response = yield call(getUserApi);
    const data = yield response.data;
    yield put(setUsers(data));
  } catch (error) {
    throw error;
  }
}

export function* addUsersWorker(action) {
  try {
    const response = yield call(addUserApi, action.payload);
    const message = yield response.statusText;
    alert(` ${message}`);
    yield put(getUsers());
  } catch (error) {
    throw error;
  }
}

export function* deleteUsersWorker(action) {
  try {
    const response = yield call(deleteUserApi, action.payload);
    const message = yield response.statusText;
    alert(`🐔🦢 ~ ${message}`);
    yield put(getUsers());
  } catch (error) {
    throw error;
  }
}
