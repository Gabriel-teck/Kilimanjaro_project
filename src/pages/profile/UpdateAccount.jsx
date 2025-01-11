import React, { useState } from "react";
import { Form } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth, db } from "../../../firebase";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
// import { updateProfile } from "firebase/auth";
import { setUser } from "../../features/auth/authSlice";
import { updateProfile } from "firebase/auth";

export const UpdateAccount = () => {
  const dispatch = useDispatch();
  const userFromState = useSelector((state) => state.auth.user);

  //Initialize form state with existing user
  const [formData, setFormData] = useState({
    firstname: userFromState.firstname || "",
    lastname: userFromState.lastname || "",
    email: userFromState.email || "",
    phonenumber: userFromState.phonenumber || "",
  });

  //handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //save changes to firestore and update redux state
  const saveChanges = async (e) => {
    e.preventDefault();
    try {
      const userDocRef = doc(db, "Users", auth.currentUser.uid);

      //update Firebase Auth user profile
      await updateProfile(auth.currentUser, {
        displayName: `${formData.firstname} ${formData.lastname}`,
        email: formData.email,
      });

      //update Firestore docs
      await updateDoc(userDocRef, {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phonenumber: formData.phonenumber,
      });

      //update redux state with new user data
      dispatch(setUser(formData));
      console.log("User information updated successfully");
      alert("Information updated successfully!");
    } catch (error) {
      console.error("Error updating user information:", error.message);
      alert("Failed to update user information. Please try again.");
    }
  };

  const deleteUser = async () => {
    try {
      //deleting user from Firestore
      await deleteDoc(doc(db, "Users", auth.currentUser.uid));

      //Signout user
      await auth.signOut();

      //Reset Redux state
      dispatch(setUser(null));

      //Redirect to login page
      window.location.href = "/login";

      console.log("User account deleted successfully!");
    } catch (error) {
      console.error("Error deleting user account:", error.message);
    }
  };
  return (
    <section className="update">
      <form className="update-profile" onSubmit={saveChanges}>
        <h3 className="text-green">Account Information</h3>
        <p>Change or update your account information here</p>
        <div className="update-form-container">
          <div className="default_input">
            <label>First Name</label>
            <input
              name="firstname"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              // placeholder={userFromState.firstname}
              required
            />
          </div>
          <div className="default_input">
            <label>Last Name</label>
            <input
              name="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              // placeholder={userFromState.lastname}
              required
            />
          </div>
          <div className="default_input">
            <label>Email</label>
            <input
              name="email"
              type="email"
              // placeholder={userFromState.email}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="default_input">
            <label>Phone Number</label>
            <input
              name="phonenumber"
              type="tel"
              // placeholder={userFromState.phonenumber}
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="update_button_">
          <button className="profile_button">Save Changes</button>
          <button
            className="profile_button"
            onClick={deleteUser}
            // onSubmit={saveChanges}
            style={{ background: "rgb(130,130,130)" }}
          >
            Delete Account
          </button>
        </div>
      </form>
    </section>
  );
};
