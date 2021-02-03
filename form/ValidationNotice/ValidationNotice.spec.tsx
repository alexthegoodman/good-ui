import * as React from "react";
import { render } from "enzyme";

import ValidationNotice from "./ValidationNotice";
import TestProvider from "../../../TestProvider";

describe("ValidationNotice", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ValidationNotice />
      </TestProvider>
    );
  });

  it("", () => {});
});
