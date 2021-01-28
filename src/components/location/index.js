import React, { Component } from "react";
const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11547.12739226011!2d-79.3834137!3d43.6527069!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd78ef1b308ab9d4!2sNathan%20Phillips%20Square!5e0!3m2!1sen!2sca!4v1611807327191!5m2!1sen!2sca"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
      ></iframe>
      <div className="location_tag">Location</div>
    </div>
  );
};

export default Location;
