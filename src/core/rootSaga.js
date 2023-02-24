import { all } from "redux-saga/effects";
import {githubSaga} from "../common/github/gitSaga";

export default function* rootSaga() {
  yield all([githubSaga()]);
};
