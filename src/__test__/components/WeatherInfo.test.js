import { render, screen } from "@testing-library/react";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";

test("Weather Info Component", () => {
  render(
    <WeatherInfo
      data={{
        data: [
          {
            uv: 2,
            vis: 1,
            pres: 1000,
            slp: 1001,
            wind_cdir_full: "north",
            wind_spd: 12,
            sunset: "5:40",
            sunrise: "4:40",
          },
        ],
      }}
    />
  );

  const pressure = screen.getByText("1000 mb")
  const seaLevelPressure = screen.getByText("1001 mb")
  const visibility = screen.getByText("1 KM")
  const UV = screen.getByText("2")
  const windSpeed = screen.getByText("12 Km/h")
  const windDirection = screen.getByText("NORTH")
  const sunRise = screen.getByText("4:40")
  const sunSet = screen.getByText("5:40")
  expect(pressure).toBeInTheDocument()
  expect(seaLevelPressure).toBeInTheDocument()
  expect(visibility).toBeInTheDocument()
  expect(UV).toBeInTheDocument()
  expect(windDirection).toBeInTheDocument()
  expect(windSpeed).toBeInTheDocument()
  expect(sunRise).toBeInTheDocument()
  expect(sunSet).toBeInTheDocument()
});
