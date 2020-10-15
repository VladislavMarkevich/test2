//@flow
export type JogType = {
  id: string,
  distance: number,
  time: number,
  date: string
};

export type JogsValuesType = $ReadOnlyArray<JogType>;

export type JogsState = {values: JogsValuesType};
