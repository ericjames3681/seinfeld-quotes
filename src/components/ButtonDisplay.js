import React from "react";
import { Button } from "semantic-ui-react";

const ButtonDisplay = ({ buttonDisplayName, clickHandler }) => (
  <Button primary onClick={clickHandler}>
    {buttonDisplayName}
  </Button>
);

export default ButtonDisplay;
