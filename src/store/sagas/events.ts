import * as actions from 'store/actions';
import { put, takeEvery, call, select } from 'redux-saga/effects';

import { IStoreState } from 'store/types';

export function* handleFetchEvents(): IterableIterator<any> {
  try {
    const eventsFetched = yield select(
      (store: IStoreState): boolean => store.events.fetchSuccess,
    );

    // do not fetch events if it is already fetched before
    if (eventsFetched) {
      return;
    }

    const events = yield call(/* request to fetch the events in the api */);

    yield put(actions.fetchEventsSuccess(events));
  } catch (e) {
    yield put(actions.fetchEventsError());
  }
}

export function* watchFetchEvents(): IterableIterator<any> {
  yield takeEvery('@events/fetch', handleFetchEvents);
}
