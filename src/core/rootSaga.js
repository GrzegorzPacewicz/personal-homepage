import { all } from "redux-saga/effects";
import {githubSaga} from "../features/Portfolio/githubSaga";

export default function* rootSaga() {
  yield all([githubSaga()]);
};
