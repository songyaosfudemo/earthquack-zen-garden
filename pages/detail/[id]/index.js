import { useRouter } from "next/router";
import Header from "../../../components/header";
import React from "react";
import { data } from "/data/data.js";
import utilStyles from "../../../styles/utils.module.css";
import {formatTime} from "../../../utils";

const Record = () => {
  const router = useRouter();
  const { id } = router.query;
  const record = data.data.features.find((r) => r.id === id);
  const details = record && record.properties;

  return (
    <>
      {details && (
        <>
          <Header
            logoImage={data.site.logoImage}
            title={data.site.title}
            firstName={data.profile.firstName}
          />
          <div className={utilStyles.details}>
            <h3>{details.title}</h3>
            <div className={utilStyles.details_content}>
              <div className={utilStyles.details_entries}>
                <span>Title</span>
                <span>Magnitude</span>
                <span>Time</span>
                <span>Status</span>
                <span>Tsunami</span>
                <span>Type</span>
              </div>
              <div className={utilStyles.details_data}>
                <span>{details.title}</span>
                <span>{details.mag}</span>
                <span>{formatTime(details.time)}</span>
                <span>{details.status}</span>
                <span>{details.tsunami}</span>
                <span>{details.type}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Record;
