import * as React from "react";
import { render } from "enzyme";

import SemanticAddress from "./SemanticAddress";
import TestProvider from "../../modules/client/TestProvider";

describe("SemanticAddress", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <SemanticAddress />
      </TestProvider>
    );
  });

  it("", () => {});
});
