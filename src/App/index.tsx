import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import styled from 'styled-components';

import ConnectApp, { ConnectAppProps } from 'connectors/App';
import { StateHook } from 'types';
import { ITheme } from 'theme';

const Container = styled.main<{ theme: ITheme }>`
  border: 1px solid ${({ theme }: { theme: ITheme }): string => theme.colors.red};
`;

const App = (props: ConnectAppProps): JSX.Element => {
  const [title, setTitle]: StateHook<string> = useState('My App');

  useEffect((): void => {
    // tslint:disable-next-line:no-console
    console.log(props);

    setTimeout((): void => {
      setTitle('The title changed haha');
    }, 2000);
  }, []);

  return (
    <Container className="App">
      <>
        <div>
          <h1>{title}</h1>
          <span>hehe</span>
          <Switch>
            <Route
              exact
              path="/settings"
              render={(): JSX.Element => <div />}
            />

            <Route
              exact
              path="/scooters/:id?"
              render={(): JSX.Element => <div />}
            />
          </Switch>
        </div>
      </>
    </Container>
  );
};

// export hot reloading enabled if it is development
const exportedApp = process.env.NODE_ENV === 'development' ? hot(App) : App;
export default exportedApp;

const connectedExport =
  process.env.NODE_ENV === 'development'
    ? hot(ConnectApp(App))
    : ConnectApp(exportedApp);
export const ConnectedApp = connectedExport;
