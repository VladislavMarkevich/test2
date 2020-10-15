//@flow
import React from "react";

import WithHeader from "components/WithHeader";
import {JogsEditorWrapperStyled, ContentWrapperStyled} from "./styled";

import type {ComponentProps as Props} from "./types";

const JogsEditor = (ignored: Props): any => {
  return (
    <JogsEditorWrapperStyled>
      <WithHeader>
        <ContentWrapperStyled></ContentWrapperStyled>
      </WithHeader>
    </JogsEditorWrapperStyled>
  );
};

export default JogsEditor;
