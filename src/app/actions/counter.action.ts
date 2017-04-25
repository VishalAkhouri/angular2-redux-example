import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable
export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';

  increment: Action {
    return { type: CounterAction.INCREMENT };
  }

  decrement: Action {
    return { typ: CounterAction.DECREMENT };
  }
}
