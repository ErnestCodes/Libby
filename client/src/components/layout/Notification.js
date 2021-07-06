import React, { Fragment, useState } from "react";
import { Detector } from "react-detect-offline";

function Notification() {
  const [wrapper, setWrapper] = useState("wrapper");

  const closeContent = () => {
    setWrapper("wrapper hide");
  };

  // Delete notification automatically
  setTimeout(() => {
    closeContent();
  }, 5000);

  const onlineUI = () => (
    <div className={wrapper}>
      <div className="toast">
        <div className="content">
          <div className="icon">
            <i className="fas fa-wifi"></i>
          </div>
          <div className="details">
            <span>You're Back online</span>
            <p>Hurray! internet is connected.</p>
          </div>
        </div>
        <div className="close-content" onClick={() => closeContent()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );

  const offlineUI = () => (
    <div className="wrapper">
      <div className="toast offline">
        <div className="content">
          <div className="icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <div className="details">
            <span>You're currently offline</span>
            <p>Opps! Internet is disconnected.</p>
          </div>
        </div>
        <div className="close-content">
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );

  return (
    <Detector
      render={({ online }) => (
        <Fragment>{!online ? offlineUI() : onlineUI()}</Fragment>
      )}
    />
  );
}

export default Notification;
