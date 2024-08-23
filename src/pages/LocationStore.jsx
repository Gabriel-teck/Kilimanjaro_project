import React, { useState } from "react";
import { locationData } from "../data";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import locationTag from "../assets/locations-b.svg";

const API_KEY = import.meta.env.GOOGLE_MAPS_API_KEY;
console.log(API_KEY);

const LocationStore = () => {
  console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
  const [searchState, setSearchState] = useState("");
  const [location, setLocation] = useState({ lat: 6.4644559, lng: 3.5524253 });
  const [clickedLocation, setClickedLocation] = useState({});

    console.log(clickedLocation, "location");

  const viewLocation = (id) => {
    const findLocation = locationData.find((data) => data.state_id === id);
    setClickedLocation(findLocation.address);
  };
  return (
    <>
      <div className="locations">
        <div className="Container">
          <div className="location-row">
            <div className="col-1-location">
              <div>
                <div>
                  <form onChange={(e) => setSearchState(e.target.value)}>
                    <div className="form-container">
                      <div className="input">
                        <input
                          placeholder="Search by a state or city"
                          value={searchState}
                          className="location"
                        />
                      </div>
                      <button className="search-btn">Search</button>
                    </div>
                  </form>
                </div>
                <div className="locations-list">
                  <div className="location-list-container">
                    {locationData
                      .filter((item) => {
                        return searchState.toLowerCase() === ""
                          ? item
                          : item.name.toLowerCase().includes(searchState) ||
                              item.location.toLowerCase().includes(searchState);
                      })
                      .map((data) => (
                        <div className="locations-card" key={data.state_id}>
                          <h1 className="text-black">{data.name}</h1>
                          <div className="location-card-p">
                            <img
                              className="img-card-p"
                              src={locationTag}
                              width={"18px"}
                              height={"18px"}
                              style={{ verticalAlign: "middle" }}
                            />
                            <p>{data.location}</p>
                          </div>
                          <button
                            onClick={() => viewLocation(data.state_id)}
                            className="green"
                          >
                            View Map
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2-location google-location">
                
              <APIProvider
                apiKey={"AIzaSyCZgCJq7RTl - _ortqTIbhgm6ZuOQGkvK1o"}
                onLoad={() => console.log("API HAS LANDED")}
              >
                <Map
                  style={{ width: "900px", height: "550px" }}
                  defaultZoom={13}
                  defaultCenter={location}
                  onCameraChanged={(ev) =>
                    console.log(
                      "camera changed:",
                      ev.detail.center,
                      "zoom:",
                      ev.detail.zoom
                    )
                  }
                ></Map>
              </APIProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationStore;

