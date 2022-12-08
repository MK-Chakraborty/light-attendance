import React, { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();

  const gooleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {});
  };

  return {};
};

export default useFirebase;
