import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders children", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
});

test("applies the primary variant by default", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole("button")).toHaveClass("cj-button--primary");
});

test("applies the secondary variant when requested", () => {
  render(<Button variant="secondary">Click me</Button>);
  expect(screen.getByRole("button")).toHaveClass("cj-button--secondary");
});

test("fires onClick", () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Click me</Button>);
  fireEvent.click(screen.getByRole("button"));
  expect(onClick).toHaveBeenCalledOnce();
});
