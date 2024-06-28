/* eslint-disable react/prop-types */
import React, { Children, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const AuthContext = createContext();

const auth = getAuth(app);
auth.languageCode = "it";
googleProvider.setCustomParameters({
  login_hint: "user@example.com",
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    signOut(auth);
  };

  const updateProfile = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      if (currUser) {
        setUser(currUser);
        setLoading(false);
      } else {
        console.log("Error in unsubscribe");
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    googleSignin,
    signin,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
