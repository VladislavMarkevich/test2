import styled from "styled-components";

export const HeaderWrapperStyled = styled.div`
  display: flex;
  background-color: ${props => {
    const {isMenuPage} = props;
    return isMenuPage ? props?.theme?.colors?.default || "" : props?.theme?.colors?.green || "";
  }};
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const LogoStyled = styled.img`
  margin: 20px 0 20px 25px;
  height: calc(100% - 40px);
`;

export const RightBlockStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
`;

export const MenuWrapperStyled = styled.div`
  @media screen and (max-width: 768px) {
    .menu {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .menu {
      display: flex;
      flex-flow: row nowrap;
    }

    .menu__item {
      box-sizing: border-box;
      padding-top: 1px;
      padding-bottom: 1px;

      cursor: pointer;
      color: white;
      font-size: 18px;
      font-weight: bold;

      :not(:last-child) {
        margin-right: 45px;
      }

      &.active {
        padding-bottom: 0;
        border-bottom: 1px solid white;
      }
    }
  }
`;

export const MenuButton = styled.img.attrs({src: "assets/images/menu.png"})`
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 28px;
    height: 24px;
    margin: 0 25px 0 0;
    cursor: pointer;
  }
`;

export const CloseButton = styled.img.attrs({src: "assets/images/close/closeGrey.png"})`
  width: 24px;
  height: 24px;
  margin: 0 25px 0 0;
  cursor: pointer;
`;
