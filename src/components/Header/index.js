//@flow
import React from "react";
import {connect} from "react-redux";

import {changeUrl} from "kernel/url/actions";
import {loginPageURL, menuPageURL} from "kernel/url/constants";
import MainMenu from "components/MainMenu";
import {HeaderWrapperStyled, LogoStyled, RightBlockStyled, MenuWrapperStyled, CloseButton, MenuButton} from "./styled";

import type {ComponentProps as Props} from "./types";

const Header = ({isMenuPage, onChangePage}: Props): any => {
  const hangeChangePage = (newValue: string): void => {
    if (onChangePage) onChangePage(newValue);
  };

  const logoSrc = `assets/images/logo/${isMenuPage ? "logoActive" : "logoInactive"}.png`;

  return (
    <HeaderWrapperStyled isMenuPage={isMenuPage}>
      <LogoStyled src={logoSrc} />
      <RightBlockStyled>
        {isMenuPage ? null : (
          <MenuWrapperStyled>
            <MainMenu />
          </MenuWrapperStyled>
        )}
        {isMenuPage ? (
          <CloseButton onClick={hangeChangePage.bind(this, loginPageURL)} />
        ) : (
          <MenuButton onClick={hangeChangePage.bind(this, menuPageURL)} />
        )}
      </RightBlockStyled>
    </HeaderWrapperStyled>
  );
};

const mapDispatchToProps = {
  onChangePage: newUrl => changeUrl(newUrl)
};

//$FlowFixMe
export default connect(undefined, mapDispatchToProps)(Header);
