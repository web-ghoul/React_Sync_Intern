import React from "react";
import styles from "./WeatherLogo.module.scss";

import a01d from "../../assets/a01d.png";
import c01d from "../../assets/c01d.png";
import c02d from "../../assets/c02d.png";
import c03d from "../../assets/c03d.png";
import c04d from "../../assets/c04d.png";
import d01d from "../../assets/d01d.png";
import f01d from "../../assets/f01d.png";
import r01d from "../../assets/r01d.png";
import r03d from "../../assets/r03d.png";
import r04d from "../../assets/r04d.png";
import r05d from "../../assets/r05d.png";
import s01d from "../../assets/s01d.png";
import s02d from "../../assets/s02d.png";
import s03d from "../../assets/s03d.png";
import s04d from "../../assets/s04d.png";
import s05d from "../../assets/s05d.png";
import s06d from "../../assets/s06d.png";
import t01d from "../../assets/t01d.png";
import t02d from "../../assets/t02d.png";
import t04d from "../../assets/t04d.png";

const WeatherLogo = ({ data }) => {
  const code = data.data[0].weather.code;
  let logo = a01d;
  if (code === 200) {
    logo = t01d;
  } else if (code === 201 || code === 202) {
    logo = t02d;
  } else if (code === 230 || code === 231 || code === 232 || code === 233) {
    logo = t04d;
  } else if (code === 300 || code === 301 || code === 302) {
    logo = d01d;
  } else if (code === 500 || code === 501) {
    logo = r01d;
  } else if (code === 502) {
    logo = r03d;
  } else if (code === 511) {
    logo = f01d;
  } else if (code === 520) {
    logo = r04d;
  } else if (code === 521 || code === 522) {
    logo = r05d;
  } else if (code === 600 || code === 621) {
    logo = s01d;
  } else if (code === 601 || code === 622) {
    logo = s02d;
  } else if (code === 602) {
    logo = s03d;
  } else if (code === 610) {
    logo = s04d;
  } else if (code === 611 || code === 612) {
    logo = s05d;
  } else if (code === 623) {
    logo = s06d;
  } else if (
    code === 700 ||
    code === 711 ||
    code === 721 ||
    code === 731 ||
    code === 741 ||
    code === 751
  ) {
    logo = a01d;
  } else if (code === 800) {
    logo = c01d;
  } else if (code === 801 || code === 802) {
    logo = c02d;
  } else if (code === 803) {
    logo = c03d;
  } else if (code === 804) {
    logo = c04d;
  }
  return (
    <div className={`${styles.weather_logo} flex jcc aic`}>
      <img src={logo} alt={"weather logo"} />
    </div>
  );
};

export default WeatherLogo;
