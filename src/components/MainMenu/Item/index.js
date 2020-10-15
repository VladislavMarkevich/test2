//@flow
import React from "react";

import {useRouteMatch} from "react-router-dom";

import type {ComponentProps as Props} from "./types";

const MenuItem = ({id, displayName, onClick, valueToAction}: Props): any => {
  const isActive = useRouteMatch({
    path: valueToAction
  });

  const handleClick = () => {
    if (!valueToAction) return;
    if (onClick) onClick(valueToAction);
  };

  const className = `menu__item ${isActive ? "active" : ""} ${id}`;

  return (
    <div key={id} className={className} onClick={handleClick}>
      {displayName}
    </div>
  );
};

export default MenuItem;
