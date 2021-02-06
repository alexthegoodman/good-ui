import Text from "antd/lib/typography/Text";
import { Alert } from "antd";

import * as React from "react";

import { OutputSystemMessageProps } from "./OutputSystemMessage.d";

const OutputSystemMessage: React.FC<OutputSystemMessageProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  type = "ERROR",
  code = "",
  attemptRefetch = false,
  output = "",
}) => {
  const clickHandler = (e) => onClick(e);

  let title = "";
  switch (type) {
    case "ERROR":
      title = `ERROR ${code}`;
      break;

    default:
      title = `ATTENTION ${code}`;
      break;
  }

  let message = "";
  if (title !== "") message = title;
  if (attemptRefetch) message = "Will attempt refetch.";
  if (output !== "") message = output;

  return (
    <>
      <Alert className="outputSystemMessage" type="warning" message={message} />
    </>
  );
};

export default OutputSystemMessage;
