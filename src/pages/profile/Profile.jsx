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
        <h3 className="text-green">Account Information</h3>
        <div className="profile-wrapper">
          <div className="profile-wrap-1">
            <div className="profile-account">
              <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src="https://pizzajungleng.com/images/account-avatar.png"
                    width="105"
                  ></img>
                </div>
                <h4
                  style={{
                    opacity: "1",
                    color: "black",
                    textAlign: "center",
                    fontWeight: "bolder",
                    marginTop: "3rem",
                    marginBottom: ".5rem",
                    fontSize: "2rem",
                    textTransform: "capitalize",
                  }}
                >
                  <span>
                    {userFromState.firstname} {userFromState.lastname}
                  </span>
                </h4>
                <p
                  style={{
                    color: "#454545",
                    fontSize: "1rem",
                    fontWeight: "400",
                    textAlign: "center",
                    fontStyle: "normal",
                    marginTop: "0",
                    marginBottom: "0",
                  }}
                >
                  <span>{userFromState.phonenumber}</span>
                </p>
                <div className="profile-referral">
                  <div style={{ display: "flex !important" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        marginLeft: "auto",
                      }}
                      className="profile-copy"
                    >
                      <img
                        src="https://pizzajungleng.com/images/copy-icon.svg"
                        alt="Copy Icon"
                        width="20"
                      ></img>
                      <p className="profile-copy-text">Copy</p>
                    </div>
                    <div className="profile-code">
                      <p
                        style={{
                          color: "#454545",
                          fontWeight: "300",
                          textAlign: "center",
                          marginBottom: "4px",
                          fontSize: "1.2rem",
                        }}
                      >
                        REF0067370F
                      </p>
                      <p
                        style={{
                          color: "rgb(144,137,128)",
                          fontWeight: "200",
                          textAlign: "center",
                          marginBottom: "3rem",
                          marginTop: "0",
                          fontSize: "1rem",
                        }}
                      >
                        Share referral code and get a reward
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="profile-link-col">
                  <Link className="profile-links" to="/profile/update-account">
                    Edit Account
                  </Link>
                </div>
                <div className="profile-link-col"></div>
                <Link className="profile-link" to="/profile/update-password">
                  Change Password
                </Link>
              </div>
            </div>
          </div>
          <div className="profile-wrap-2">
            <div className="profile-container">
              <h4
                style={{
                  paddingBottom: "1rem",
                  fontWeight: "700",
                  color: "#000",
                  fontSize: "1.2rem",
                }}
              >
                Your orders
              </h4>
              <div className="profile-empty">
                <div style={{ marginTop: "10rem", marginBottom: "10rem" }}>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: ".5rem",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://pizzajungleng.com/images/empty-box.png"
                      alt="Empty box"
                      width="80"
                    />
                  </div>
                  <p
                    style={{
                      color: "454545",
                      fontWeight: "300",
                      textAlign: "center",
                      marginBottom: "1rem",
                      fontSize: "1rem",
                      marginTop: "0",
                    }}
                  >
                    Your orders will appear here!
                  </p>
                  <Link className="back-to-shop" to="/home">
                    Keep Shoppping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{ marginTop: "1.5rem !important" }}>
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
        </div> */}
        {/* <div className="profile-buttons">
          <Link className="profile-links" to="/profile/update-account">
            EDIT ACCOUNT
          </Link>
          <Link className="profile-links" to="/profile/update-password">
            CHANGE PASSWORD
          </Link>
        </div> */}
        {/* <div style={{ marginTop: "3rem" }}>
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
        </div> */}
      </div>
    </section>
  );
};
