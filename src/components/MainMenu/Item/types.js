//@flow
export type ComponentProps = {
  id: string,
  displayName: string,
  onClick?: (newValue: string) => void,
  valueToAction?: string
};
