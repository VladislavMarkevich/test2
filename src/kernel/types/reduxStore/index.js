//@flow
import type {URLState} from "./url";
import type {JogsState} from "./jogs";

export * from "./url";
export * from "./jogs";

export type ReduxStore = {
  URL: URLState,
  jogs: JogsState
};
