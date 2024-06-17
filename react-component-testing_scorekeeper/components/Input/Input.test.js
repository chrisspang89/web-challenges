import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./index"; // Import the Input component

// Test to ensure the input renders with correct attributes
test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Username"
      placeholder="Enter your username"
      name="username"
    />
  );

  // Check for the label
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();

  // Check for the input with specific attributes
  const inputElement = screen.getByPlaceholderText(/enter your username/i);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", "username");
  expect(inputElement).toHaveAttribute("placeholder", "Enter your username");
});

// Test to ensure the onChange callback is called on every user input
test("calls callback on every user input", async () => {
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Username"
      placeholder="Enter your username"
      name="username"
      onChange={handleChange}
    />
  );

  // Simulate user typing into the input
  const inputElement = screen.getByPlaceholderText(/enter your username/i);
  await userEvent.type(inputElement, "test");

  // Ensure the callback is called for each character input
  expect(handleChange).toHaveBeenCalledTimes(4);
});
