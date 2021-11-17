import React, { useState, useEffect, useContext } from "react";
// import { onAuthStateChanged } from "firebase/auth";
import {
  onSnapshot,
  collection,
  // query,
  // where,
} from "@firebase/firestore";

import List from "../components/ChatRoom/List";
import Toolbar from "../components/ChatRoom/Toolbar";
import Window from "../components/ChatRoom/Window";

import { AuthContext } from "../components/Context/AuthProvider";

import { db } from "../config/firebase";

const ChatRoom = () => {
  const [user, setUser] = useState([]);

  const data = useContext(AuthContext);

  useEffect(() => {
    // try {
    //   onSnapshot(
    //     query(collection(db, "Account"), where("uid", "==", data.uid)),
    //     (snapshot) =>
    //       setUser(
    //         snapshot.docs.map((doc) => {
    //           if (doc.data().uid === data.uid) {
    //             setIsHave(true);
    //           }
    //           return {
    //             ...doc.data(),
    //             id: doc.id,
    //           };
    //         })
    //       )
    //   );
    // } catch {}
  }, [data]);

  useEffect(
    () =>
      onSnapshot(collection(db, "Account"), (snapshot) =>
        setUser(
          snapshot.docs.map((doc) => {
            if (data.uid === doc.data().uid) {
              return {
                ...doc.data(),
                id: doc.id,
              };
            }
            return "";
          })
        )
      ),
    [data]
  );

  const [active, setActive] = useState("chat");
  const [isAddBoard, setIsAddBoard] = useState(false);

  return (
    <div className="box">
      {user.length > 0 && (
        <div className="chatroom">
          <Toolbar active={active} setActive={setActive} user={user[0]} />
          <List
            active={active}
            setIsAddBoard={setIsAddBoard}
            isAddBoard={isAddBoard}
          />
          <Window active={active} setActive={setActive} />
        </div>
      )}
      {isAddBoard && (
        <div className="addboard">
          <div className="addboard__title">
            <div className="addboard__title__text">Add Friend</div>
            <div
              onClick={() => {
                setIsAddBoard(false);
              }}
              className="addboard__title__button"
            >
              <i class="bx bx-x"></i>
            </div>
          </div>
          <div className="addboard__box">
            <label>Name</label>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="addboard__button">
            <div
              onClick={() => {
                setIsAddBoard(false);
              }}
              className="addboard__button__close"
            >
              Close
            </div>
            <div className="addboard__button__add">Add</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
