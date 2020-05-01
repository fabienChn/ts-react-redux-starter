import { RouterState } from 'connected-react-router';

import { IEvent } from './actions/events';

import * as actions from './actions';

export type ActionsType = {
  [fnName in keyof typeof actions]?: typeof actions[fnName];
};

export interface IStoreState {
  router: RouterState;
  events: IEventsState;
}

export interface IEventsState {
  data: IEvent[];
  isFetching: boolean;
  fetchSuccess: boolean;
  fetchFailure: boolean;
}
