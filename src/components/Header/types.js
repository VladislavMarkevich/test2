//@flow
export type PassedProps = {
  onChangePage: (newUrl: string) => void,
  isMenuPage?: boolean
};

export type DispatchActions = {};

export type ResultSelector = {};

export type ComponentProps = PassedProps & DispatchActions & ResultSelector;
