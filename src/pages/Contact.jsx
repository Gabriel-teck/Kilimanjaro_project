import React, { useState } from "react";
import call from "../assets/call.svg";
import navigate from "../assets/navigate.svg";
import email from "../assets/email.png";
import facebook from "../assets/fb.svg";
import insta from "../assets/ig.svg";
import twitter from "../assets/twitter.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    text: "",
  });

  const handleClick = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section>
        <div className="contact-container">
          <div className="contact-img">image</div>
          <div className="contact-row">
            <div className="contact-row-1">
              <div>
                <h1 className="c-first-header"> Opening Hours</h1>
                <p> Mondays - Sundays:- 08:00 am - 06:00 pm</p>
              </div>
              <div>
                <h1 className="cl">Visit Us</h1>
                <p className="sec-header">
                  <img
                    src={navigate}
                    alt="navigate"
                    height={18}
                    style={{ verticalAlign: "center", paddingRight: "5px" }}
                  />
                  23 Nzimiro street, Old GRA. Port Harcourt
                </p>
              </div>
              <div>
                <h1 className="cl">Phone no</h1>
                <p className="sec-header">
                  <img
                    src={call}
                    alt="call"
                    height={18}
                    style={{ verticalAlign: "center", paddingRight: "5px" }}
                  />
                  +234 700 007 4992, +234 815 687 0023
                </p>
              </div>
              <div>
                <h1 className="cl"> E-mail</h1>
                <p className="sec-header">
                  <img
                    src={email}
                    alt="email"
                    height={18}
                    style={{ verticalAlign: "center", paddingRight: "5px" }}
                  />
                  pizzajungle@sundryfood.com
                </p>
              </div>
              <div
                style={{ display: "flex", gap: "2rem", marginTop: "2.5rem" }}
              >
                <a href="">
                  <img
                    src={facebook}
                    alt="fb"
                    height={18}
                    style={{ verticalAlign: "center" }}
                  />
                </a>
                <a href="">
                  <img
                    src={insta}
                    alt="ig"
                    height={18}
                    style={{ verticalAlign: "center" }}
                  />
                </a>
                <a href="">
                  <img
                    src={twitter}
                    alt="x"
                    height={18}
                    style={{ verticalAlign: "center" }}
                  />
                </a>
              </div>
            </div>
            <div className="contact-row-2">
              <h2
                style={{
                  color: " #62626c",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                Send us a message
              </h2>
              <form className="contact-form">
                <input
                className="type"
                  placeholder="Full Name"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleClick}
                />
                <input
                className="type"
                  placeholder=" Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleClick}
                />
                <input
                className="type"
                  placeholder="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleClick}
                />
                <textarea
                  placeholder="Your Message"
                  name="text"
                  value={formData.text}
                  onChange={handleClick}
                />
                <button>Send message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
