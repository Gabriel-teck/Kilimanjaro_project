import React from "react";
import "../profile/profile.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Profile = () => {
  const userFromState = useSelector((state) => state.auth.user);
  console.log("profile", userFromState);
  return (
    <section className="profile">
      <div className="profile_new">
        <h3 className="text-green">My Account</h3>
        <div style={{ marginTop: "1.5rem !important" }}>
          <h4 className="profile_subtitle">Account Information</h4>
          <div style={{ marginTop: "1rem" }}>
            <p
              className="profile-details"
              style={{ textTransform: "capitalize" }}
            >
              Name:<span>{userFromState.firstname}</span>
              <span>{userFromState.lastname}</span>
            </p>
            <p className="profile-details">
              Email:<span>{userFromState.email}</span>
            </p>
            <p className="profile-details">
              Phone Number:<span>{userFromState.phonenumber}</span>
            </p>
            <p className="profile-details">
              <span>Balance:0.00</span>
            </p>
            <p className="profile-details">
              Referal Code:<span>REF0067370F</span>
            </p>
            <p className="profile-details">
              Refer and get a value for your referral
            </p>
          </div>
        </div>
        <div className="profile-buttons">
          <Link className="profile-links" to="/profile/update-account">
            EDIT ACCOUNT
          </Link>
          <Link className="profile-links" to="/profile/update-password">
            CHANGE PASSWORD
          </Link>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <h4 className="profile_subtitle">My Orders</h4>
          <div
            style={{
              gap: "1rem ",
              marginTop: "1rem ",
              alignItems: "center ",
              justifyContent: "center ",
              display: "flex ",
            }}
          >
            <p>You have not made any Order yet</p>
            <button className="btn-profile">Make an Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};
