import * as React from "react";

import { SemanticAddressProps } from "./SemanticAddress.d";

const SemanticAddress: React.FC<SemanticAddressProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  lines = [],
  children,
}) => {
  const clickHandler = (e) => onClick(e);
  return (
    <address className="semanticAddress">
      {lines.map((line, i) => {
        return <Text tagName="p">{line}</Text>;
      })}
    </address>
  );
};

export default SemanticAddress;
