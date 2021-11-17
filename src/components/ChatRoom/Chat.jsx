import React, { useState } from "react";
import classnames from "classnames";

import Avatar from "../../assets/img/avt.jpeg";

const Chat = (props) => {
  const { setIsAddBoard, isAddBoard } = props;

  const [isClick, setIsClick] = useState("1");

  return (
    <div className="list__chat">
      <div className="list__chat__title">Chats</div>
      <div className="list__chat__search">
        <i class="bx bx-search-alt"></i>
        <input type="text" placeholder="Search message or users" />
        <i
          onClick={() => {
            setIsAddBoard(true);
          }}
          className={classnames(
            "adduser bx bx-user-plus",
            isAddBoard && "onActive"
          )}
        ></i>
      </div>
      <div className="list__chat__subtitle">Recent</div>
      <div className="list__chat__item">
        {/* Dữ liệu fake */}
        {/* cần liên kết db vào */}
        <div
          className={classnames(
            "list__chat__item__tag",
            isClick === "1" && "onClick"
          )}
          onClick={() => {
            setIsClick("1");
          }}
        >
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              {/* trạng thái online (doc-online) */}
              <div className="doc-online"></div>
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
        <div
          className={classnames(
            "list__chat__item__tag",
            isClick === "2" && "onClick"
          )}
          onClick={() => {
            setIsClick("2");
          }}
        >
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              {/* trạng thái bận (doc-busy) */}
              <div className="doc-busy"></div>
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
        <div
          className={classnames(
            "list__chat__item__tag",
            isClick === "3" && "onClick"
          )}
          onClick={() => {
            setIsClick("3");
          }}
        >
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              {/* trạng thái off */}
              {/* <div className="doc-online"></div> */}
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        {/* ------------------------------------------------------------------------------ */}
        {/* ------------------------------------------------------------------------------ */}
        {/* Dữ liệu thêm để nhận biết scroll */}
        <div className="list__chat__item__tag">
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              <div className="doc-online"></div>
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
        <div className="list__chat__item__tag">
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              <div className="doc-online"></div>
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
        <div className="list__chat__item__tag">
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              <div className="doc-online"></div>
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
        <div className="list__chat__item__tag">
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              <div className="doc-online"></div>
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
        <div className="list__chat__item__tag">
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              <div className="doc-online"></div>
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
        <div className="list__chat__item__tag">
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              <div className="doc-online"></div>
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
        <div className="list__chat__item__tag">
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              <div className="doc-online"></div>
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
        <div className="list__chat__item__tag">
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              <div className="doc-online"></div>
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
        <div className="list__chat__item__tag">
          <div className="list__chat__item__tag__user">
            <div className="image">
              <img src={Avatar} alt="" />
              <div className="doc-online"></div>
            </div>
            <div className="info">
              <div className="info__name">Lirin</div>
              <div className="info__message">This is message</div>
            </div>
          </div>
          <div className="list__chat__item__tag__time">Time</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
