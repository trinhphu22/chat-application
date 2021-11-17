import React, { useState } from "react";
import classnames from "classnames";
import { signOut } from "firebase/auth";

import Logo from "../../assets/img/logo.png";

import { auth } from "../../config/firebase";

const Toolbar = (props) => {
  const { active, setActive, user } = props;

  const [isClick, setIsClick] = useState(false);

  const Logout = () => {
    signOut(auth);
  };

  return (
    <>
      <div className="toolbar">
        <div className="toolbar__logo">
          <img src={Logo} alt="" />
        </div>
        <div className="toolbar__item">
          <div
            onClick={() => {
              setActive("profile");
            }}
            className="list__item__profile"
          >
            <i class="bx bx-user-pin"></i>
          </div>
          <div
            onClick={() => {
              setActive("chat");
            }}
            className={classnames(
              "list__item__chat",
              active === "chat" && "onClick"
            )}
          >
            <i class="bx bx-message-dots"></i>
          </div>
          <div
            onClick={() => {
              setActive("group");
            }}
            className="list__item__group"
          >
            <i class="bx bx-group"></i>
          </div>
          <div
            onClick={() => {
              setActive("contact");
            }}
            className="list__item__contact"
          >
            <i class="bx bx-book-content"></i>
          </div>
          <div
            onClick={() => {
              setActive("setting");
            }}
            className="list__item__setting"
          >
            <i class="bx bx-cog"></i>
          </div>
        </div>
        {!isClick ? (
          <div
            onClick={() => {
              setIsClick(true);
            }}
            className="toolbar__avatar"
          >
            <img src={user.photoURL} alt="" />
          </div>
        ) : (
          <div
            onClick={() => {
              setIsClick(false);
            }}
            className="toolbar__avatar"
          >
            <img src={user.photoURL} alt="" />
          </div>
        )}
      </div>
      {isClick && (
        <div className="subnav">
          <div className="subnav__tag">
            <div>Profile</div>
            <i class="bx bx-id-card"></i>
          </div>
          <div className="subnav__tag">
            <div>Setting</div>
            <i class="bx bx-cog"></i>
          </div>
          <div onClick={Logout} className="subnav__tag">
            <div>Logout</div>
            <i class="bx bx-log-out"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default Toolbar;
