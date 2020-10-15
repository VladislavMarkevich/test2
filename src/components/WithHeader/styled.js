import styled from "styled-components";

export const WithHeaderWrapperStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
`;

export const HeaderWrapperStyled = styled.div`
  display: flex;
  flex-basis: ${props => props?.theme?.mainProportion?.header || ""};
  max-height: ${props => props?.theme?.mainProportion?.header || ""};
`;

export const ChildrenWrapperStyled = styled.div`
  display: flex;
  flex-basis: ${props => props?.theme?.mainProportion?.content || ""};
`;
