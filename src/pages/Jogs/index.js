//@flow
import React from "react";

import WithHeader from "components/WithHeader";
import {JogsWrapperStyled, ContentWrapperStyled} from "./styled";

import type {ComponentProps as Props} from "./types";

const Jogs = (props: Props): any => {
  return (
    <JogsWrapperStyled>
      <WithHeader>
        <ContentWrapperStyled />
      </WithHeader>
    </JogsWrapperStyled>
  );
};

export default Jogs;
