//@flow
import React from "react";

import WithHeader from "components/WithHeader";
import {LoginWrapperStyled, ContentWrapperStyled} from "./styled";

import type {ComponentProps as Props} from "./types";

const Login = (ignored: Props): any => {
  return (
    <LoginWrapperStyled>
      <WithHeader>
        <ContentWrapperStyled />
      </WithHeader>
    </LoginWrapperStyled>
  );
};

export default Login;
