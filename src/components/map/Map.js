import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import {
  GOOGLE_API_KEY,
  MAP_OPTIONS,
  ZOOM,
  START_LAT,
  START_LONG,
} from "../../lib/map-constants";

const SimpleMap = () => {
  /* this.state = {
      places: [],
    };
  
    const { places } = this.state; */
  let startLat = START_LAT;
  let startLong = START_LONG;
  return (
    <React.Fragment>
      {
        <div style={{ height: "50vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
            center={{ lat: startLat, lng: startLong }}
            options={MAP_OPTIONS}
            zoom={ZOOM}
          ></GoogleMapReact>
        </div>
      }
    </React.Fragment>
  );
};

export default SimpleMap;
