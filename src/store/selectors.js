//@flow
import {createSelector} from "reselect";
import type {Selector, URLState, JogsState, JogsValuesType} from "kernel/types";

const emptyObject = {};
const emptyArray = [];

export const getURLState: Selector<any, URLState> = state => state?.URL || "";

const getJogsState: Selector<any, JogsState> = state => state?.jogs || emptyObject;
export const getJogsValues: Selector<any, JogsValuesType> = createSelector(
  [getJogsState],
  (jogsState: JogsState) => jogsState?.values || emptyArray
);
