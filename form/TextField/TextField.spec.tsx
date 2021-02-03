import * as React from "react";
import { render } from "enzyme";

import TextField from "./TextField";
import TestProvider from "../../../TestProvider";

describe("TextField", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <TextField />
      </TestProvider>
    );
  });

  it("", () => {});
});
