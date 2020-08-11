import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("mooncake knows what to say", () => {
  expect(mooncakeSays("wooahh")).toBe("(o.o) wooahh");
});

test("mooncake is not sure what to say", () => {
  expect(mooncakeSays()).toBe("(o.o) chookty?");
});
