import { ComponentClass } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import { IStoreState, IEventsState, IDispatchProps } from 'store/types';

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

  // @ts-ignore
  return connect<T & ConnectAppProps>(
    // @ts-ignore
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
};
