import React from "react";
import {
  // onSnapshot,
  collection,
  addDoc,
  // query,
  // where,
} from "@firebase/firestore";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import Helmet from "../components/Helmet";

import { auth, db } from "../config/firebase";

const ggProvider = new GoogleAuthProvider(); // Tạo provider cho gg
const fbProvider = new FacebookAuthProvider(); // Tạo provider cho fb

const LoginPage = () => {
  // const [user, setUser] = useState();

  // Đăng nhập bằng tài khoản fb
  // Chưa xài được cần khắc phục bảo mật
  const handleFbLogin = async () => {
    const user = await signInWithPopup(auth, fbProvider);
    console.log({ user });
  };

  // Đăng nhập bằng tài khoản gg
  const handleGgLogin = async () => {
    const { user } = await signInWithPopup(auth, ggProvider);

    handleAdd(user);
  };

  const handleAdd = async (user) => {
    const collectionRef = collection(db, "Account");
    const payload = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    };
    await addDoc(collectionRef, payload);
  };

  return (
    <Helmet title="Login">
      <div className="select-login">
        <div className="select-login__box">
          <div className="select-login__box__title">Welcome to HappyChat</div>
          <button
            onClick={handleGgLogin}
            className="select-login__box__btn-google"
          >
            <i class="bx bxl-google"></i>
            Sign In with Google
          </button>
          <button
            onClick={handleFbLogin}
            className="select-login__box__btn-facebook"
          >
            <i class="bx bxl-facebook"></i>
            Sign In with Facebook
          </button>
          <div className="smalltext">or</div>
          <Link
            to="/login/account"
            className="select-login__box__btn-happychat"
          >
            Create account
          </Link>
        </div>
      </div>
    </Helmet>
  );
};

export default LoginPage;
