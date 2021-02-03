import * as React from "react";
import { render } from "enzyme";

import SliderField from "./SliderField";
import TestProvider from "../../../TestProvider";

describe("SliderField", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <SliderField />
      </TestProvider>
    );
  });

  it("", () => {});
});
