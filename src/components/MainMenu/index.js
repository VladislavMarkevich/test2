//@flow
import React from "react";
import {connect} from "react-redux";

import {changeUrl} from "kernel/url/actions";
import {jogsViewerPageURL, infoPageURL} from "kernel/url/constants";
import MenuItem from "./Item";

import type {ComponentProps as Props} from "./types";

const MainMenu = ({onChangePage}: Props) => {
  return (
    <div className="menu">
      <MenuItem id="jogs" displayName="JOGS" onClick={onChangePage} valueToAction={jogsViewerPageURL} />
      <MenuItem id="info" displayName="INFO" onClick={onChangePage} valueToAction={infoPageURL} />
      <MenuItem id="contactUs" displayName="CONTACT US" onClick={onChangePage} />
    </div>
  );
};

const mapDispatchToProps = {
  onChangePage: newUrl => changeUrl(newUrl)
};

//$FlowFixMe
export default connect(undefined, mapDispatchToProps)(MainMenu);
