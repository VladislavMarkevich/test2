//@flow
import type {Selector, URLState} from "kernel/types";

export const getURLState: Selector<any, URLState> = state => state?.URL || "";
