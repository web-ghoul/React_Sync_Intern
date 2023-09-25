import { render, screen } from "@testing-library/react";
import Temperature from "../../components/Temperature/Temperature";

test("Temperature Component", () => {
  render(
    <Temperature
      data={{
        data: [
          {
            temp: 30,
            weather: {
              description: "clear sky",
            },
          },
        ],
      }}
    />
  );

  const tempValue = screen.getByText("30");
  const weatherDescription = screen.getByText("clear sky");
  expect(tempValue).toBeInTheDocument();
  expect(weatherDescription).toBeInTheDocument();
});
