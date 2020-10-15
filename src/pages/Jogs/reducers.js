//@flow
import {handleActions} from "redux-actions";

import {JOG_ADD} from "./actionTypes";

import type {Reducer, JogsState, JogType} from "kernel/types";

const defaultState = {
  values: [
    {id: "1", distance: 303, time: 15, date: "15.10.2020"},
    {id: "2", distance: 248, time: 7, date: "15.11.2020"},
    {id: "3", distance: 522, time: 20, date: "15.12.2020"}
  ]
};

const add: Reducer<JogsState, JogType> = (state, action) => {
  const {values} = state;
  const {payload: jog} = action;

  const newValues = [...values];
  newValues.push(jog);

  return {...state, values: newValues};
};

const JogsReducers: any = handleActions(
  {
    [JOG_ADD]: add
  },
  defaultState
);

export default JogsReducers;
