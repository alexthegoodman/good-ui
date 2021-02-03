import * as React from "react";
import { storiesOf } from "@storybook/react";
import NoResults from "./NoResults";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("NoResults", () => (
  <TestProvider>
    <NoResults />
  </TestProvider>
));
