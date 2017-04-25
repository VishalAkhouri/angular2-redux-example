import { Action } from 'redux';
import { IAppState } from '../actions/IAppState';
import { CounterActions } from '../actions/counter.action';

export const INITIAL_STATE: IAppState = {
  count: 0
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch(action.type) {
    case CounterActions.INCREMENT: return { count: lastState.count + 1 };
    case CounterActions.DECREMENT: return { count: lastState.count - 1 };
  }

  return lastState;
}
