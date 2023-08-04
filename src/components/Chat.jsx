import React from "react";
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
// import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
// import { ChatContext } from "../context/ChatContext";


const Chat = () => {

  // const {data} = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        {/* <span>{data.user?.displayName}</span> */}
        <span>bhvhilwjilkwf</span>
        <div className="chatIcons">
          <img src="./img/cam.png" alt="" />
          <img src="./img/add.png" alt="" />
          <img src="./img/more.png" alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;