import { ActionCreator, Action } from 'redux';

export interface IFetchEventsAction extends Action {
  type: '@events/fetch';
  payload: {
    id: string;
  };
}

export interface IFetchEventsSuccessAction extends Action {
  type: '@events/fetch_success';
  payload: {
    data: IEvent[];
  };
}

export interface IFetchEventsErrorAction extends Action {
  type: '@events/fetch_error';
}

export interface IEvent {
  id: string;
  name: string;
}
export const fetchEvents: ActionCreator<IFetchEventsAction> = (
  ticketId: string,
): IFetchEventsAction => ({
  type: '@events/fetch',
  payload: {
    id: ticketId,
  },
});

export const fetchEventsSuccess: ActionCreator<IFetchEventsSuccessAction> = (
  events: IEvent[],
): IFetchEventsSuccessAction => ({
  type: '@events/fetch_success',
  payload: {
    data: events,
  },
});

export const fetchEventsError: ActionCreator<
  IFetchEventsErrorAction
> = (): IFetchEventsErrorAction => ({
  type: '@events/fetch_error',
});
