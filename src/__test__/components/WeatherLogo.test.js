import { render, screen } from "@testing-library/react";
import WeatherLogo from "../../components/WeatherLogo/WeatherLogo";

test("Weather Logo Component", () => {
  render(
    <WeatherLogo
      data={{
        data: [
          {
            weather:{
                code:200
            }
          },
        ],
      }}
    />
  );
  const logo = screen.getByAltText("weather logo");
  expect(logo).toBeInTheDocument();
});
