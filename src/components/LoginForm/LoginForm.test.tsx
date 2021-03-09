import React from "react";
import { render, fireEvent, screen, act } from "@tests";
import LoginForm from ".";

describe("LoginForm", () => {
  let mockLogin: () => void;

  beforeEach(() => {
    mockLogin = jest.fn();
  });

  it("should render the form", async () => {
    render(<LoginForm onSubmit={mockLogin} />);
    // labels
    const emailLabel = screen.getByText(/e-mail/i);
    const passwordLabel = screen.getByText(/senha/i);
    // inputs
    const email = screen.getByLabelText("email");
    const password = screen.getByLabelText("password");
    // submit btn
    const button = screen.getByRole("button", { name: /submit/i });

    // visibility tests
    expect(emailLabel).toBeVisible();
    expect(passwordLabel).toBeVisible();
    expect(email).toBeVisible();
    expect(password).toBeVisible();
    expect(button).toBeVisible();
  });

  it("should display required errors when inputs are not fulfilled", async () => {
    render(<LoginForm onSubmit={mockLogin} />);
    await act(async () => {
      fireEvent.change(screen.getByLabelText("email"), {
        target: { value: "" },
      });

      fireEvent.change(screen.getByLabelText("password"), {
        target: { value: "" },
      });

      fireEvent.submit(screen.getByRole("button"), { name: /submit/i });
    });

    expect(screen.queryByText("O e-mail é necessário;")).toBeVisible();
    expect(screen.queryByText("A senha é necessária;")).toBeVisible();
  });

  it("should display invalid email error properly", async () => {
    render(<LoginForm onSubmit={mockLogin} />);
    await act(async () => {
      fireEvent.change(screen.getByLabelText("email"), {
        target: { value: "wrong-mail" },
      });

      fireEvent.submit(screen.getByRole("button"), { name: /submit/i });
    });

    expect(screen.queryByText("Digite um e-mail válido;")).toBeVisible();
  });

  it("should submit when validation is fulfilled", async () => {
    render(<LoginForm onSubmit={mockLogin} />);
    await act(async () => {
      fireEvent.change(screen.getByLabelText("email"), {
        target: { value: "wrong-mail@fdf.com" },
      });

      fireEvent.change(screen.getByLabelText("password"), {
        target: { value: "password" },
      });

      fireEvent.submit(screen.getByRole("button"), { name: /submit/i });
    });

    expect(mockLogin).toBeCalledTimes(1);
  });

  it("should render a properly text for submit button ", () => {
    render(<LoginForm onSubmit={mockLogin} loading />);
    expect(screen.getByRole("button")).toHaveTextContent("Autenticando");
  });
});
