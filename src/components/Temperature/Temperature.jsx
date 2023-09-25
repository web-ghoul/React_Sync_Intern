import React from "react";
import styles from "./Temperature.module.scss";

const Temperature = ({data}) => {
  const weather = data.data[0].weather
  const temp = Math.round(data.data[0].temp)
  return (
    <div className={`${styles.temperature} grid jcc aic`}>
      <div className={`${styles.temp_num}`}>
        <span>{temp}</span>
        <sup>°C</sup>
      </div>
      <span className={`${styles.temp_type} tac`}>{weather.description}</span>
      <hr/>
    </div>
  );
};

export default Temperature;
