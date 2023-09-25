import { render, screen } from "@testing-library/react";
import WeatherCity from "../../components/WeatherCity/WeatherCity";

test("Weather City Component", () => {
  render(
    <WeatherCity
      data={{
        data: [
          {
            city_name:"cairo"
          },
        ],
      }}
    />
  );

  const cityName = screen.getByText("cairo");
  expect(cityName).toBeInTheDocument();
});
