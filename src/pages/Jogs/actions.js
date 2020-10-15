//@flow
import {createActions} from "redux-actions";

import {changeUrl} from "kernel/url/actions";
import {jogsEditorPageURL} from "kernel/url/constants";
import {JOG_ADD} from "./actionTypes";

import type {Action, JogType} from "kernel/types";

const {jogAdd: addJogAction} = createActions(JOG_ADD);

export const addJog: (jog: JogType) => Action<void> = jog => dispatch => {
  dispatch(addJogAction(jog));
};

export const openJobEditorPage: () => Action<void> = () => dispatch => {
  dispatch(changeUrl(jogsEditorPageURL));
};
