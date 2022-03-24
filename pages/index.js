import React from "react";
import {data} from "/data/data.js";
import Header from "../components/header";
import utilStyles from "../styles/utils.module.css";
import {formatTime} from "../utils";

const HomePage = () => {
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
              <th className={utilStyles.tableHeader}>Title</th>
              <th className={utilStyles.tableHeader}>Magnitude</th>
              <th className={utilStyles.tableHeader}>Time</th>
            </tr>
          </thead>
          <tbody>
            {data.data.features.map((record) => (
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
