import { all } from "redux-saga/effects";
import {githubSaga} from "../Homepage/Portfolio/githubSaga";

export default function* rootSaga() {
  yield all([githubSaga()]);
};
