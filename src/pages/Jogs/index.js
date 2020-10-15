//@flow
import React from "react";
import {connect} from "react-redux";

import {makeJogsProps} from "./selectors";
import {openJobEditorPage} from "./actions";
import WithHeader from "components/WithHeader";
import Jog from "components/Jog";
import {JogsWrapperStyled, ContentWrapperStyled, ItemsWrapperStyled, FooterStyled, AddIconStyled} from "./styled";

import type {ComponentProps as Props} from "./types";

const Jogs = ({values, onOpenJobEditorPage}: Props) => {
  const handleClickOnAddButton = () => {
    if (onOpenJobEditorPage) onOpenJobEditorPage();
  };

  return (
    <JogsWrapperStyled>
      <WithHeader>
        <ContentWrapperStyled>
          <ItemsWrapperStyled>
            {values.map(value => {
              const {id} = value;
              return <Jog {...value} key={id} />;
            })}
          </ItemsWrapperStyled>
          <FooterStyled>
            <AddIconStyled onClick={handleClickOnAddButton} />
          </FooterStyled>
        </ContentWrapperStyled>
      </WithHeader>
    </JogsWrapperStyled>
  );
};

const mapDispatchToProps = {
  onOpenJobEditorPage: () => openJobEditorPage()
};

//$FlowFixMe
export default connect(makeJogsProps, mapDispatchToProps)(Jogs);
