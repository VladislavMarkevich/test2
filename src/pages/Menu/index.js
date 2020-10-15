//@flow
import React from "react";

import MainMenu from "components/MainMenu";
import WithHeader from "components/WithHeader";
import {MenuWrapperStyled, MainMenuWrapperStyled} from "./styled";

import type {ComponentProps as Props} from "./types";

const Menu = (ignored: Props): any => {
  return (
    <MenuWrapperStyled>
      <WithHeader isMenuPage>
        <MainMenuWrapperStyled>
          <MainMenu />
        </MainMenuWrapperStyled>
      </WithHeader>
    </MenuWrapperStyled>
  );
};

export default Menu;
