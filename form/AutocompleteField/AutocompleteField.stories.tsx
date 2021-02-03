import * as React from "react";
import { storiesOf } from "@storybook/react";
import AutocompleteField from "./AutocompleteField";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("AutocompleteField", () => (
  <TestProvider>
    <AutocompleteField />
  </TestProvider>
));
