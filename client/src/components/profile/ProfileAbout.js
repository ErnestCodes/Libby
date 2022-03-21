import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    user: { name },
    bio,
    skills,
  },
}) => {
  return (
    <div className="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 className="text-color">
            {`${
              name.trim().split(" ").length < 0
                ? name
                : name.trim().split(" ")[0]
            }'s`}{" "}
            Bio
          </h2>
          <p>{bio}</p>
          <div className="line"></div>
        </Fragment>
      )}
      <h2 class="text-color">Skill Set</h2>
      <div class="skills">
        {skills &&
          skills.map((skill, index) => (
            <div className="p-1" key={index}>
              <i className="fa fa-check"></i> {skill}
            </div>
          ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {};

export default ProfileAbout;
