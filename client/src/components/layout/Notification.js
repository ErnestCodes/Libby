import React, { Fragment, useState } from "react";
import { Detector } from "react-detect-offline";

function Notification() {
  const offlineUI = () => (
    <div className="wrapper">
      <div className="toast offline">
        <div className="content">
          <div className="icon">
            {/* <i class="fas fa-exclamation-triangle"></i> */}
            <i className="fas fa-server"></i>
          </div>
          <div className="details">
            <span>You're currently offline</span>
            <p>Opps! Internet is disconnected.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Detector
      render={({ online }) => <Fragment>{!online && offlineUI()}</Fragment>}
    />
  );
}

export default Notification;
