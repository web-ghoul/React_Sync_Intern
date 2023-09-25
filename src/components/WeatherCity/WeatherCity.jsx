import React from "react";
import styles from "./WeatherCity.module.scss";

const WeatherCity = ({data}) => {
  const cityName = data.data[0].city_name
  return (
    <div className={`flex flex_wrap jcc aic ${styles.country_and_city}`}>
      <span>{cityName}</span>
    </div>
  );
};

export default WeatherCity;
