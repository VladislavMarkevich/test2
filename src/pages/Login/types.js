//@flow
export type PassedProps = {};

export type DispatchActions = {
  onChangePage: (newUlr: string) => void
};

export type ResultSelector = {};

export type ComponentProps = PassedProps & DispatchActions & ResultSelector;
