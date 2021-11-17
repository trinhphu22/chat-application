import React from "react";

import Chat from "./Chat";

const List = (props) => {
  const { active, setIsAddBoard, isAddBoard } = props;

  return (
    <>
      <div className="list">
        {active === "chat" && (
          <Chat setIsAddBoard={setIsAddBoard} isAddBoard={isAddBoard} />
        )}
      </div>
    </>
  );
};

export default List;
