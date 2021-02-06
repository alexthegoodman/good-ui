import Text from "antd/lib/typography/Text";
import * as React from "react";

import { NoResultsProps } from "./NoResults.d";

const NoResults: React.FC<NoResultsProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
}) => {
  const clickHandler = (e) => onClick(e);
  return (
    <>
      <Text tagName="h1">Wait!</Text>
      <Text tagName="p">You have not joined any spaces</Text>
    </>
  );
};

export default NoResults;
