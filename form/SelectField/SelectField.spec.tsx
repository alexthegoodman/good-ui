import * as React from "react";
import { render } from "enzyme";

import SelectField from "./SelectField";
import TestProvider from "../../../TestProvider";

describe("SelectField", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <SelectField />
      </TestProvider>
    );
  });

  it("", () => {});
});
