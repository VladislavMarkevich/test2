//@flow
import type {JogsValuesType} from "kernel/types";

export type PassedProps = {};

export type DispatchActions = {
  onOpenJobEditorPage: () => void
};

export type ResultSelector = {
  values: JogsValuesType
};

export type ComponentProps = PassedProps & DispatchActions & ResultSelector;
