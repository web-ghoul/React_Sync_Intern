import React from "react";
import styles from "./WeatherInfo.module.scss";

const WeatherInfo = ({ data }) => {
  const myData = data.data[0];
  const wind = Math.round(myData.wind_spd);
  const wind_dir = myData.wind_cdir_full.toUpperCase();
  const pressure = Math.round(myData.pres);
  const UV = Math.round(myData.uv);
  const visibility = Math.round(myData.vis);
  const seaLevelPressure = Math.round(myData.slp);
  const sunrise = myData.sunrise;
  const sunset = myData.sunset;
  return (
    <>
      <div className={`${styles.info} grid jcfs aic pad20`}>
        <span>Wind</span>
        <span className={`${styles.large_font}`}>{wind} Km/h</span>
        <span>{wind_dir}</span>
      </div>
      <div className={`${styles.info} grid jcfs aic pad20`}>
        <span>Pressure</span>
        <span className={`${styles.large_font}`}>{pressure} mb</span>
      </div>
      <div className={`${styles.info} grid jcfs aic pad20`}>
        <span>UV Index</span>
        <span className={`${styles.large_font}`}>{UV}</span>
        <span>Moderate</span>
      </div>
      <div className={`${styles.info} grid jcfs aic pad20`}>
        <span>Visibility</span>
        <span className={`${styles.large_font}`}>{visibility} KM</span>
      </div>
      <div className={`${styles.info} grid jcfs aic pad20`}>
        <span>Sea Level Pressure</span>
        <span className={`${styles.large_font}`}>{seaLevelPressure} mb</span>
      </div>
      <div className={`${styles.info} grid jcfs aic g20 pad20`}>
        <span>Sun</span>
        <div className={`grid jcfs aic g5`}>
          <div className={`flex jcfs aic g10`}>
            <span>Rise</span>
            <span className={`${styles.small_font}`}>{sunrise}</span>
          </div>
          <div className={`flex jcfs aic g10`}>
            <span>Set</span>
            <span className={`${styles.small_font}`}>{sunset}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherInfo;
