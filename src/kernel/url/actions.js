//@flow
import {createActions} from "redux-actions";
import {URL_CHANGE} from "./actionTypes";

import type {Action} from "kernel/types";

const {urlChange: changeUrlAction} = createActions(URL_CHANGE);

export const changeUrl: (newUrl: string) => Action<void> = newUrl => dispatch => {
  dispatch(changeUrlAction(newUrl));
};
