//@flow
import React from "react";

import WithHeader from "components/WithHeader";
import {firstParagraph, secondParagraph} from "./constants";
import {
  InfoWrapperStyled,
  ContentWrapperStyled,
  TitleContainerStyled,
  TextWrapperStyled,
  TextContainerStyled
} from "./styled";

import type {ComponentProps as Props} from "./types";

const Info = (ignored: Props): any => {
  return (
    <InfoWrapperStyled>
      <WithHeader>
        <ContentWrapperStyled>
          <TitleContainerStyled>INFO</TitleContainerStyled>
          <TextWrapperStyled>
            <TextContainerStyled>{firstParagraph}</TextContainerStyled>
            <TextContainerStyled>{secondParagraph}</TextContainerStyled>
          </TextWrapperStyled>
        </ContentWrapperStyled>
      </WithHeader>
    </InfoWrapperStyled>
  );
};

export default Info;
