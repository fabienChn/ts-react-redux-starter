import { Reducer } from 'redux';
import { IEventsState } from 'store/types';

const initialState: IEventsState = {
  data: [],
  isFetching: false,
  fetchSuccess: false,
  fetchFailure: false,
};

const reducer: Reducer<IEventsState> = (
  state = initialState,
  { type, payload = {} },
): IEventsState => {
  switch (type) {
    case '@events/fetch':
      return {
        ...state,
        isFetching: true,
        fetchSuccess: false,
        fetchFailure: false,
      };
    case '@events/fetch_success':
      return {
        ...state,
        isFetching: false,
        fetchSuccess: true,
        data: payload.data,
      };
    case '@events/fetch_error':
      return {
        ...state,
        isFetching: false,
        fetchFailure: true,
      };
    default:
      return state;
  }
};

export default reducer;
