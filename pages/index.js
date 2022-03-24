import React, { useState } from "react";
import { data } from "/data/data.js";
import Header from "../components/header";
import utilStyles from "../styles/utils.module.css";
import { COLS, formatTime, sortData } from "../utils";

const HomePage = () => {
  const [titleDirection, setTitleDirection] = useState(false);
  const [magDirection, setMagDirection] = useState(false);
  const [timeDirection, setTimeDirection] = useState(false);
  const [colToSort, setCol] = useState("");

  const DIRECTIONS = {
    [COLS.TIME]: timeDirection,
    [COLS.MAG]: magDirection,
    [COLS.TITLE]: titleDirection,
  };

  const handleColClick = (e) => {
    const id = e.target.id;
    setCol(id);
    if (id === COLS.TITLE) {
      setTitleDirection(!titleDirection);
    } else if (id === COLS.MAG) {
      setMagDirection(!magDirection);
    } else if (id === COLS.TIME) {
      setTimeDirection(!timeDirection);
    }
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
              {[COLS.TITLE, COLS.MAG, COLS.TIME].map((item, index) => (
                <th key={index}>
                  <span key={item} id={item} onClick={handleColClick}>{item}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortData(data.data.features, colToSort, DIRECTIONS[colToSort]).map(
              (record) => (
                <tr key={record.id}>
                  <td>
                    <a href={`detail/${record.id}`}>
                      {record.properties.place}
                    </a>
                  </td>
                  <td>{record.properties.mag}</td>
                  <td>{formatTime(record.properties.time)}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;
