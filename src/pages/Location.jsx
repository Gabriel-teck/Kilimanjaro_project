import React, { lazy, Suspense } from "react";

const LocationStore = lazy(() =>
  delayForDemo(import("../pages/LocationStore"))
);

const Location = () => {
  return (
    <>
      <section className="store-locations">
        <div className="store-locations_header">
          <div className="overlay">
            <h1 className="text-white">Store Locations</h1>
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          <LocationStore />
        </Suspense>
      </section>
    </>
  );
};

export default Location;

const Loading = () => {
  return (
    <>
      <div className="loading">
        <div className="loading-container">
          <div className="loading-row">
            <span className="loader store-locations l-w l-h"></span>;
          </div>
        </div>
      </div>
    </>
  );
};

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
