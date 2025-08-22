import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /hello world/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("has the correct document structure", () => {
    render(<Home />);

    // Check that the main container is present
    const mainDiv = screen.getByRole("heading").closest("div");
    expect(mainDiv).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
