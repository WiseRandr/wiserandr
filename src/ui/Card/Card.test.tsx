import { render } from "@testing-library/react";

import { Card } from "./Card";

describe("<Card />", () => {
  it("should render children", () => {
    render(<Card>Card content</Card>);
  });
});
