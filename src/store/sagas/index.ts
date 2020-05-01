import { all } from 'redux-saga/effects';

import { watchFetchEvents } from './events';

export default function* rootSaga(): IterableIterator<any> {
  yield all([
    watchFetchEvents(),
  ]);
}
