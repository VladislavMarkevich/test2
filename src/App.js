//@flow
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import styled from "styled-components";
import {Switch, Route, useHistory} from "react-router-dom";

import pages from "pages";
import {getURLState} from "store/selectors";

import type {Selector} from "kernel/types";

type Props = {
  URL: string
};

const AppWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
`;

function App(props: Props): any {
  const {URL} = props;

  let history = useHistory();
  useEffect(() => {
    history.push(URL);
  }, [URL, history]);

  return (
    <AppWrapperStyled>
      <Switch>
        {pages.map(page => {
          const {path} = page;
          return <Route {...page} key={path} />;
        })}
      </Switch>
      ;
    </AppWrapperStyled>
  );
}

const makeAppProps: Selector<{}, Props> = () => {
  return createStructuredSelector({URL: getURLState});
};

//$FlowFixMe
export default connect(makeAppProps)(App);
