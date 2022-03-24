import React from "react";
import { data } from "/data/data.js";
import Header from "../../components/header";
import utilStyles from "../../styles/utils.module.css";

const Profile = () => {
  const profile = data.profile;

  return (
    <>
      {profile && (
        <>
          <Header
            logoImage={data.site.logoImage}
            title={data.site.title}
            firstName={profile.firstName}
          />
          <h3 className={utilStyles.title}>Profile</h3>
          <div className={utilStyles.details}>
            <div className={utilStyles.details_content}>
              <img
                className={utilStyles.avatar}
                src={profile.avatarImage}
                alt="avatar"
              />

              <div className={utilStyles.details_entries}>
                <span>First name</span>
                <span>Last name</span>
                <span>Phone</span>
                <span>Email</span>
                <span>Bio</span>
              </div>
              <div className={utilStyles.details_data}>
                <span>{profile.firstName}</span>
                <span>{profile.lastName}</span>
                <span>{profile.phone}</span>
                <span>{profile.email}</span>
                <span className={utilStyles.bio}>{profile.bio}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
