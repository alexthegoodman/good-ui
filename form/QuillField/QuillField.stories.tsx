import * as React from "react";
import { storiesOf } from "@storybook/react";
import QuillField from "./QuillField";
import TestProvider from "../../../TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("QuillField", () => (
  <TestProvider>
    <QuillField />
  </TestProvider>
));
