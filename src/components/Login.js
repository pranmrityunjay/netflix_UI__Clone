import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useRef } from "react";
import { checkValidationThroughRegex } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import Browse from "./Browse";

const Login = () => {
  const [isSignIn, changeSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null);
  const [errorMessage, changeErrorMessage] = useState(null);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const func = () => {
    changeSignIn(!isSignIn);
  };

  const checkValidation = () => {
    const isValid = checkValidationThroughRegex(
      email.current.value,
      password.current.value
    );
    changeErrorMessage(isValid);
    if (isValid) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/160566066?v=4",
          })
            .then(() => {
              const { uid, email, displayName,photoURL } =auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL}));
    
            })
            .catch((error) => {
              console.log(error.message)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          changeErrorMessage(errorCode + "--" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          changeErrorMessage(errorCode + "--" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen w-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:w-3/12 w-8/12 p-12 absolute  bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl text-white font-bold my-2">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-[220px] rounded-sm bg-gray-700"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="text-white p-2 my-2 w-[220px] rounded-sm bg-gray-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" text-white p-2 my-2 w-[220px] rounded-sm bg-gray-700"
        ></input>
        <button
          onClick={checkValidation}
          className="p-3 my-3 bg-red-600 w-[220px] text-white rounded-sm"
        >
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        <p className="text-red-700">{errorMessage}</p>
        <p onClick={func} className="text-white">
          {isSignIn
            ? "Are you new to Netflix? sign up now"
            : "Already user Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
