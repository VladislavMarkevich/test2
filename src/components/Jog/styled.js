import styled from "styled-components";

export const JobWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: ${props => props?.theme?.mobileVersionFrom || ""}) {
    border-bottom: 1px solid ${props => props?.theme?.colors?.greyLow || ""};
  }
`;

export const BlockWrapperStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const IconStyled = styled.img.attrs({src: "assets/images/jog.png"})`
  width: 87px;
  height: 87px;
  margin: 0 45px 0 0;
`;

export const InfoWpapperStyled = styled.div``;

export const LineStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;

  font-size: 16px;

  :not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const DateStyled = styled.div`
  color: ${props => props?.theme?.colors?.grey || ""};
`;

export const PropertyDisplayNameStyled = styled.div`
  margin-right: 6px;
`;

export const PropertyValueStyled = styled.div`
  color: ${props => props?.theme?.colors?.greyStrong || ""};
`;
