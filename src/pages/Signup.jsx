import React, { useState } from "react";
import login from "../assets/login-img.webp";
import { Link, useNavigation, Form, redirect } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { SignInWithGoogle } from "../pages/SignInWithGoogle";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const password = formData.get("password");
  const birthdate = formData.get("birthdate");
  const phonenumber = formData.get("phonenumber");
  const gender = formData.get("gender");
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, "Users", user.uid), {
        firstname,
        lastname,
        email,
        password,
        phonenumber,
        birthdate,
        gender,
      });
    }
    console.log("User is registered successfull");
    return redirect("/#home");
  } catch (error) {
    console.log(error.message);
  }
  return null;
};

const Signup = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState("text");

  const validateForm = () => {
    if (password !== confirmPassword) {
      setError("Password does not match!");
      return false;
    }
    setError("");
    return true;
  };

  const formSubmit = (e) => {
    if (!validateForm()) {
      e.preventDefault();
    }
  };

  return (
    <>
      <section className="signup">
        <div className="signup-container">
          <div className="col-signup-1">
            <img src={login} alt="" className="login-pizza" />
          </div>
          <div className="col-signup-2">
            <h1>Sign up</h1>
            <Form
              method="post"
              onSubmit={formSubmit}
              replace
              className="signup-form"
            >
              <div className="signup-row">
                <input
                  name="firstname"
                  type="text"
                  placeholder="First name"
                  required
                />
                <input
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                  required
                />
              </div>
              <div className="signup-row">
                <input name="email" type="email" placeholder="Email" required />
                <input
                  name="password"
                  type="password"
                  placeholder="Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="signup-row">
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <input
                  name="phonenumber"
                  type="text"
                  placeholder="+234 805 068 9393"
                  required
                />
              </div>
              <div className="signup-row">
                <select name="gender" required>
                  <option>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">feMale</option>
                </select>
                <input
                  name="birthdate"
                  // type="text"
                  placeholder="Birthday"
                  type={type}
                  onFocus={() => setType("date")}
                  onBlur={() => setType("text")}
                  required
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button
                className="signup-btn"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Signing in..."
                  : "Sign in"}
              </button>
            </Form>
            <div className="signup-bottom">
              <p>
                Do you have an account with us?{" "}
                <span>
                  <Link className="span" to="/login">
                    Log in
                  </Link>
                </span>
              </p>
              <p style={{ marginTop: "0" }}>Or Sign Up with</p>
              <SignInWithGoogle />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
