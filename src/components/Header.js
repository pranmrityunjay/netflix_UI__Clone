import React, { useState, useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate, Link } from "react-router-dom";
import Browse from "./Browse";
import { signOut } from "firebase/auth";
import GPTContext from "../utils/createContext";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import { uselang } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import MovieDetail from "./MovieDetail";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { changeContextName, isGPT } = useContext(GPTContext);
  const isgpt = useSelector((store) => store?.GPT?.isGPT);
  const user = useSelector((store) => store.user);
  const isView = useSelector((store) => store.view.isView);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");

        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black  z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="userIcon"
      ></img>

      {!isView && user && 
        <div className="flex p-2 justify-between">
          {isgpt && (
            <select
              className="w-20 h-9 bg-pink-400 rounded-sm text-white"
              onChange={(e) => {
                dispatch(changeLanguage(e.target.value));
              }}
            >
              {uselang.map((c) => (
                <option key={c.identifier} value={c.identifier}>
                  {c.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={(e) => {
              dispatch(toggleGPTSearchView("sj"));
            }}
            className="bg-green-500 h-9 mx-4 px-3 rounded-sm text-white"
          >
            {isgpt ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 mx-1 hidden md:inline-block"
            src={user.photoURL}
            alt="userIcon"
          ></img>
          <button
            onClick={handleSignOut}
            className="font-bold mb-4 p-2 bg-red-600 rounded-sm text-white"
          >
            Sign Out
          </button>
        </div>
      }
    </div>
  );
};

export default Header;
