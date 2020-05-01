import { ComponentClass } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import { IStoreState, ActionsType, IEventsState } from 'store/types';

interface IDispatchProps {
  actions?: ActionsType;
}

export interface IStateProps {
  events?: IEventsState;
}

export type ConnectAppProps = IDispatchProps & IStateProps;

export default <T extends {}>(
  Component: any,
): ComponentClass<T & ConnectAppProps> => {
  const mapStateToProps = (state: IStoreState): IStateProps => {
    return {
      events: state.events,
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
      actions: bindActionCreators(actions, dispatch),
    };
  };

  return connect<T & ConnectAppProps>(
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
};
