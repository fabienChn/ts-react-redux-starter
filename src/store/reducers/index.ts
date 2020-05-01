import { connectRouter } from 'connected-react-router';
import { combineReducers, Reducer } from 'redux';
import { History } from 'history';

import { IStoreState } from '../types';
import eventsReducer from './events';

const rootReducer = (history: History): Reducer => combineReducers<IStoreState>({
  router: connectRouter(history),
  events: eventsReducer,
});

export default rootReducer;
