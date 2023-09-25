import React from "react";

const WeatherDate = ({ data }) => {
  const currentDate = new Date(data.data[0].datetime.split(":")[0]);
  const date_options = { year: "numeric", month: "long", day: "numeric" };
  const time_options = {
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", date_options);
  const formattedTime = new Intl.DateTimeFormat("en-US", time_options).format(currentDate)
  const parts = formattedDate.split(" ");
  const day = parts[1];
  const month = parts[0];
  const year = parts[2];
  const formattedDateCustom = `${day.slice(
    0,
    day.length - 1
  )}-${month}-${year}`;
  return (
    <div className={`grid jcc aic tac`}>
      <span>{formattedDateCustom}</span>
      <span>{formattedTime}</span>
    </div>
  );
};

export default WeatherDate;
