//@flow
import React from "react";

import Header from "components/Header";
import {WithHeaderWrapperStyled, HeaderWrapperStyled, ChildrenWrapperStyled} from "./styled";

import type {ComponentProps as Props} from "./types";

const WithHeader = ({isMenuPage, children}: Props): any => {
  return (
    <WithHeaderWrapperStyled>
      <HeaderWrapperStyled>
        <Header isMenuPage={isMenuPage} />
      </HeaderWrapperStyled>
      <ChildrenWrapperStyled>{children}</ChildrenWrapperStyled>
    </WithHeaderWrapperStyled>
  );
};

export default WithHeader;
