import React from "react";
import { render, fireEvent, screen, act } from "@tests";
import Home from "@pages";

jest.useFakeTimers();

jest.mock("@utils/fetch", () => ({
  fetch: jest.fn().mockResolvedValue({
    response: {
      statusCode: "",
      status: 200,
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
      ],
    },
  }),
}));

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("should display a successful alert when user logged in", async () => {
    await act(async () => {
      fireEvent.change(screen.getByLabelText("email"), {
        target: { value: "sincere@april.biz" },
      });

      fireEvent.change(screen.getByLabelText("password"), {
        target: { value: "password" },
      });

      fireEvent.submit(screen.getByRole("button"), { name: /submit/i });
    });

    const alert = await screen.findByRole("alert");

    expect(alert).toBeVisible();
    expect(alert.innerHTML).toMatch(/Logado com sucesso!/);
    // is the only one?
    const alerts = await screen.findAllByRole("alert");
    expect(alerts.length).toEqual(1);
  });
});
