import React from "react";

import Avatar from "../../assets/img/avt.jpeg";

const Window = () => {
  return (
    <div className="window">
      <div className="window__top">
        <div className="window__top__info">
          <div className="image">
            <img src={Avatar} alt="" />
            <div className="doc-online"></div>
          </div>
          <div className="name">Lirin</div>
        </div>
        <div className="window__top__icon">
          <i class="bx bx-search-alt"></i>
          <i class="bx bx-phone"></i>
          <i class="bx bx-video"></i>
          <i class="bx bx-user-pin"></i>
          <i class="bx bx-dots-horizontal-rounded"></i>
        </div>
      </div>
      <div className="window__main">
        <div className="me">
          <p>my message 1</p>
        </div>
        <div className="you">
          <p>your message 1</p>
          <p>your message 2</p>
        </div>
        <div className="me">
          <p>my message 2</p>
        </div>
      </div>
      <div className="window__footer">
        <input type="text" placeholder="Type message" />
        <div className="window__footer__icon">
          <i class="bx bx-smile smile"></i>
          <i class="bx bx-send send"></i>
        </div>
      </div>
    </div>
  );
};

export default Window;
