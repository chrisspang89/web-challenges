import { render, screen } from "@testing-library/react";
import Navigation from ".";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: "/" };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation players={[]} />);

  const playLink = screen.getByRole("link", { name: /play/i });
  const historyLink = screen.getByRole("link", { name: /history/i });

  expect(playLink).toBeInTheDocument();
  expect(historyLink).toBeInTheDocument();
});
