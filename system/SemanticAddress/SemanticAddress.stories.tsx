import * as React from "react";
import { storiesOf } from "@storybook/react";
import SemanticAddress from "./SemanticAddress";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("SemanticAddress", () => (
  <TestProvider>
    <SemanticAddress />
  </TestProvider>
));
