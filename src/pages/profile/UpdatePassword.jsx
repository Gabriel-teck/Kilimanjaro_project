import { useState } from "react";
import { auth } from "../../../firebase";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

export const UpdatePassword = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  //handle form input changes for password update
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  //update password handler
  const updatePasswordHandler = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = passwordData;

    //check if new password and confirm password match
    if (newPassword == !confirmPassword) {
      alert("New password and Confirm password do not match!");
      return;
    }

    try {
      //Reauthenticate user
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        currentPassword
      );
      await reauthenticateWithCredential(auth.currentUser, credential);

      //Update password
      await updatePassword(auth.currentUser, newPassword);
      console.log("Password updated successfully!");
      alert("Password updated successfully!");

      //Clear password fields
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error updating password:", error.message);
      alert(
        "Failed to update password. Please ensure the current password is correct."
      );
    }
  };

  return (
    <section className="update">
      <form className="update-profile" onSubmit={updatePasswordHandler}>
        <h3 className="text-green">Change Password</h3>
        <p>Is your password vulnerable? You can change it here.</p>
        <div className="update-form-container">
          <div className="default_input">
            <label>Current Password</label>
            <input
              name="currentPassword"
              type="password"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="default_input">
            <label>New Password</label>
            <input
              name="newPassword"
              type="password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="default_input">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>
        </div>
        <div className="update_button_">
          <button className="profile_button">Update Password</button>
        </div>
      </form>
    </section>
  );
};
