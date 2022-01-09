import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // user registration
  const registerNewUser = (email, password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = "/register/personalInfo";
        navigate(destination);
        setAuthError("");
        setUser(userCredential.user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // user sign in
  const signInUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/register/personalInfo";
        navigate(destination);
        setAuthError("");
        setUser(userCredential.user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // google sign in
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = location?.state?.from || "/register/personalInfo";
        navigate(destination);
        setAuthError("");
        setUser(result.user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // user Sign Out
  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // current signed in user check
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribed;
  }, [auth]);

  return {
    registerNewUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    authError,
    isLoading,
    user,
  };
};

export default useFirebase;
