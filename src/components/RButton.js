import { Button } from "@chakra-ui/react";
import React from "react";

const RButton = ({ action, value, colorScheme, vis = "block" }) => {
  return (
    <Button
      onClick={action}
      width="16"
      height="16"
      borderRadius="full"
      colorScheme={colorScheme}
      fontSize="2xl"
      visibility={vis}
    >
      {value}
    </Button>
  );
};

export default RButton;
