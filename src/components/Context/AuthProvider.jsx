import React, { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";
// import { Spin } from "antd";

import { auth } from "../../config/firebase";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        history.push("/"); // Nếu có user chuyển sang trang chủ (chatroom)
      } else {
        setUser("");
        history.push("/login"); // Ngược lại chuyển sang sang đăng nhập (login)
      }
    });

    // Làm sạch function
    return () => {
      unsubscribe();
    };
  }, [history, user]);

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
