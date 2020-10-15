import styled from "styled-components";

export const InfoWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentWrapperStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  width: calc(100% - 50px);
  margin: 85px 25px 0 25px;
  max-width: 615px;

  @media only screen and (max-width: ${props => props?.theme?.mobileVersionFrom || ""}) {
    margin-top: 25px;
  }
`;

export const TitleContainerStyled = styled.div`
  color: ${props => props?.theme?.colors?.green || ""};
  font-size: 25px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

export const TextWrapperStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const TextContainerStyled = styled.div`
  line-height: 24px;
  font-size: 12pt;

  :not(:last-child) {
    margin-bottom: 30px;
  }
`;
