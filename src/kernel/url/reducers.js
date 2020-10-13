//@flow
import {handleActions} from "redux-actions";

import {URL_CHANGE} from "./actionTypes";
import {loginPageURL} from "./constants";

import type {Reducer, URLState} from "kernel/types";

const defaultState = loginPageURL;

const change: Reducer<URLState, string> = (state, action) => {
  const {payload: newURL} = action;
  return newURL;
};

const URLReducers: any = handleActions(
  {
    [URL_CHANGE]: change
  },
  defaultState
);

export default URLReducers;
