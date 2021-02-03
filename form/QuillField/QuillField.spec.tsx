import * as React from "react";
import { render } from "enzyme";

import QuillField from "./QuillField";
import TestProvider from "../../../TestProvider";

describe("QuillField", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <QuillField />
      </TestProvider>
    );
  });

  it("", () => {});
});
