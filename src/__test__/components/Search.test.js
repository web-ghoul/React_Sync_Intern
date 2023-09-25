import { render, screen } from "@testing-library/react";
import Search from "../../components/Search/Search";

test("Search Component", () => {
  render(<Search />);
  const searchButton = screen.getByRole("button");
  const searchInput = screen.getByTestId("search_input");
  expect(searchButton).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});
