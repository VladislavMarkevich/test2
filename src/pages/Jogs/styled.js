import styled from "styled-components";

export const JogsWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  width: 100%;
  grid-template-rows: minmax(${props => props?.theme?.jogItemHeight || ""}, 1fr) 107px;
  max-height: 100%;
`;

export const ItemsWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  max-width: 100%;
  grid-template-rows: repeat(auto-fit, ${props => props?.theme?.jogItemHeight || ""});
  grid-auto-rows: ${props => props?.theme?.jogItemHeight || ""};
  max-height: 100%;
  overflow: auto;
`;

//footer

export const FooterStyled = styled.div`
  position: relative;
`;

export const AddIconStyled = styled.img.attrs({src: "assets/images/add.png"})`
  width: 47px;
  height: 47px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);

  cursor: pointer;
`;
