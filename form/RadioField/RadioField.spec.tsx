import * as React from "react";
import { render } from "enzyme";

import RadioField from "./RadioField";
import TestProvider from "../../../TestProvider";

describe("RadioField", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <RadioField />
      </TestProvider>
    );
  });

  it("", () => {});
});
