import React from "react";
import google from "../assets/google.svg";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

export const SignInWithGoogle = () => {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider).then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            firstname: user.displayName,
            phone: user.phoneNumber,
            photo: user.photoURL,
          });
        }
        window.location.href = "/#home";
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div style={{cursor:"pointer"}}>
      <div onClick={googleLogin}>
        <img src={google} alt="Google image" />
      </div>
    </div>
  );
};
