import React, { useState } from "react";
import login from "../assets/login-img.webp";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { SignInWithGoogle } from "../pages/SignInWithGoogle";
import { ForgetPassword } from "./profile/ForgetPassword";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathName =
    new URL(request.url).searchParams.get("redirectTo") || "/#home";
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successful");
    return redirect(pathName);
  } catch (error) {
    console.log(error.message);
  }
  return null;
};

const Login = () => {
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => {
    setOpenModal(false);
  };
  const onOpen = () => {
    setOpenModal(!openModal);
    console.log("open");
  };

  return (
    <>
      <section className="login">
        <div className="login-container">
          <div className="col-login-1">
            <img src={login} alt="" className="login-pizza" />
          </div>
          <div className="col-login-2">
            <h1>Login</h1>

            <Form className="form-box" method="post" replace>
              <div className="input-box">
                <input
                  className="input-type"
                  name="email"
                  type="email"
                  placeholder="Gab@email.com"
                />
              </div>
              <div className="input-box">
                <input
                  className="input-type"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="forget-link">
                <span
                  style={{ color: "#62626c", cursor: "pointer" }}
                  onClick={onOpen}
                >
                  Forget password?
                  {openModal && <ForgetPassword onClose={onClose} openModal={openModal}/>}
                </span>
              </div>
              <button
                className="login-btn"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Signing in..."
                  : "Sign in"}
              </button>
            </Form>
            <div className="login-bottom">
              <p>
                Are you a new member?{" "}
                <span>
                  <Link className="span" to="/signup">
                    Sign up
                  </Link>
                </span>
              </p>
              <p style={{ marginTop: "0" }}>Or signup with</p>
              <SignInWithGoogle />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
