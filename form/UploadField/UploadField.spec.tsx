import * as React from "react";
import { render } from "enzyme";

import UploadField from "./UploadField";
import TestProvider from "../../../TestProvider";

describe("UploadField", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <UploadField />
      </TestProvider>
    );
  });

  it("", () => {});
});
