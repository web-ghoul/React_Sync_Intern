import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import Temperature from "./components/Temperature/Temperature";
import WeatherCity from "./components/WeatherCity/WeatherCity";
import WeatherDate from "./components/WeatherDate/WeatherDate";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherLogo from "./components/WeatherLogo/WeatherLogo";
import "./styles/app.scss";
import "./styles/webGhoul.scss";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
const handleFetchData = async (c) => {
  try {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&city=${c}&key=${process.env.REACT_APP_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

function App() {
  const [city, setCity] = useState();
  const { data, isLoading, isError } = useQuery(["myData", city], () =>
    handleFetchData(city)
  );

  useEffect(() => {
    if (Cookies.get("city")) {
      setCity(Cookies.get("city"));
    } else {
      Cookies.set("city", "cairo");
      setCity("cairo");
    }
  }, [city]);

  if (isLoading) {
    return <div className="center_abs_x_y tac flex jcc aic">Loading...</div>;
  }
  if (isError) {
    return (
      <div className="center_abs_x_y tac flex jcc aic">
        Error ,Please Refresh The Page...
      </div>
    );
  }
  return (
    <main className="App pad20">
      <div className="container center_rel_x grid jcs aic">
        <section className={`search_section`}>
          <div className="contain grid jcc aic g30 pad20">
            <Search setCity={setCity} />
            <WeatherLogo data={data} />
            <Temperature data={data} />
            <WeatherDate data={data} />
            <WeatherCity data={data} />
          </div>
        </section>
        <section className={`info_section`}>
          <div className="info_section_contain grid jcs aic pad20 g30">
            <WeatherInfo data={data}/>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
