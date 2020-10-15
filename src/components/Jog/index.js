//@flow
import React from "react";

import {
  JobWrapperStyled,
  BlockWrapperStyled,
  IconStyled,
  InfoWpapperStyled,
  DateStyled,
  LineStyled,
  PropertyDisplayNameStyled,
  PropertyValueStyled
} from "./styled";

import type {ComponentProps as Props} from "./types";

const Jog = ({distance, time, date}: Props): any => {
  const speed = (distance / (time / 60)).toFixed(2);

  const speedDisplayValue = `${speed} km/h`;
  const distanceDisplayValue = `${distance} km`;
  const timeDisplayValue = `${time} min`;

  return (
    <JobWrapperStyled>
      <BlockWrapperStyled>
        <IconStyled />
        <InfoWpapperStyled>
          <LineStyled>
            <DateStyled>{date}</DateStyled>
          </LineStyled>
          <LineStyled>
            <PropertyDisplayNameStyled>Speed:</PropertyDisplayNameStyled>
            <PropertyValueStyled>{speedDisplayValue}</PropertyValueStyled>
          </LineStyled>
          <LineStyled>
            <PropertyDisplayNameStyled>Distance:</PropertyDisplayNameStyled>
            <PropertyValueStyled>{distanceDisplayValue}</PropertyValueStyled>
          </LineStyled>
          <LineStyled>
            <PropertyDisplayNameStyled>Time:</PropertyDisplayNameStyled>
            <PropertyValueStyled>{timeDisplayValue}</PropertyValueStyled>
          </LineStyled>
        </InfoWpapperStyled>
      </BlockWrapperStyled>
    </JobWrapperStyled>
  );
};

export default Jog;
