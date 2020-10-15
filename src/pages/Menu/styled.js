import styled from "styled-components";

export const MenuWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainMenuWrapperStyled = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);

  .menu {
    width: 170px;
    height: 150px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;

    :not(:last-child) {
      margin-bottom: 45px;
    }
  }

  .menu__item {
    font-size: 26px;
    font-weight: bold;
    cursor: pointer;

    &.info {
      color: ${props => props?.theme?.colors?.green || ""};
    }
  }
`;
