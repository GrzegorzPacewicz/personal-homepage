import { all } from "redux-saga/effects";
import {githubSaga} from "../common/github/githubSaga";

export default function* rootSaga() {
  yield all([githubSaga()]);
};
