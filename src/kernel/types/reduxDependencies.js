//@flow
import type {ReduxStore} from "./reduxStore";

type ReducerAction<Payload, TMeta = any> = {|
  type: string,
  payload: Payload,
  error?: true,
  meta?: TMeta
|};

type Dispatch = any => any;

export type Reducer<ReduxStore, Payload, TMeta = any> = (
  state: ReduxStore,
  action: ReducerAction<Payload, TMeta>
) => ReduxStore;

export type Action<T> = (dispatch: Dispatch, getState: () => ReduxStore) => T;

export type Selector<TProps, TResult> = (state: ReduxStore, props: TProps, ...rest: $ReadOnlyArray<any>) => TResult;
