//@flow
import {createStructuredSelector} from "reselect";

import {getJogsValues} from "store/selectors";

import type {Selector} from "kernel/types";
import type {ComponentProps, ResultSelector} from "./types";

type Sel<Res> = Selector<ComponentProps, Res>;

export const makeJogsProps: Sel<ResultSelector> = () => {
  return createStructuredSelector({
    values: getJogsValues
  });
};
