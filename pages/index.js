import React, { useState } from "react";
import { data } from "/data/data.js";
import Header from "../components/header";
import utilStyles from "../styles/utils.module.css";
import { formatTime } from "../utils";

const HomePage = () => {
  const [titleDirection, setTitleDirection] = useState("");
  const [magDirection, setMagDirection] = useState("");
  const [timeDirection, setTimeDirection] = useState("");
  const [col, setCol] = useState("");

  const handleColClick = (e) => {
    const id = e.target.id;
    console.log(id);
    setCol(id);
    if (id === "title") {
      setTitleDirection(!titleDirection);
    } else if (id === "mag") {
      setMagDirection(!magDirection);
    } else if (id === "time") {
      setTimeDirection(!timeDirection);
    }
  };

  const sortData = (data) => {
    data.sort((a, b) => {
      if (col === "title") {
        return titleDirection
          ? a.properties.place > b.properties.place
          : a.properties.place < b.properties.place;
      } else if (col === "mag") {
        return magDirection
          ? a.properties.place > b.properties.place
          : a.properties.place < b.properties.place;
      } else if (col === "time") {
        return timeDirection
          ? a.properties.time > b.properties.time
          : a.properties.time < b.properties.time;
      }
    });
    return data;
  };

  return (
    <>
      <Header
        logoImage={data.site.logoImage}
        title={data.site.title}
        firstName={data.profile.firstName}
      />
      <div className={utilStyles.home}>
        <h3 className={utilStyles.title}>{data.data.metadata.title}</h3>
        <table className={utilStyles.table}>
          <thead>
            <tr>
              <th
                id="title"
                onClick={handleColClick}
                className={utilStyles.tableHeader}
              >
                Title
              </th>
              <th
                id="mag"
                onClick={handleColClick}
                className={utilStyles.tableHeader}
              >
                Magnitude
              </th>
              <th
                id="time"
                onClick={handleColClick}
                className={utilStyles.tableHeader}
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {sortData(data.data.features).map((record) => (
              <tr key={record.id} className={utilStyles.tableRow}>
                <td>
                  <a href={`detail/${record.id}`}>{record.properties.place}</a>
                </td>
                <td>{record.properties.mag}</td>
                <td>{formatTime(record.properties.time)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;
