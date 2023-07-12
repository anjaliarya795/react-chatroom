import React from "react";
// import Img from "../img/img.png";
// import Attach from "../img/attach.png";


const Input = () => {
 
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
      />
      <div className="send">
        <img src="./img/attach.png" alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
        />
        <label htmlFor="file">
          <img src="./img/img.png" alt="" />
        </label>
        <button >Send</button>
      </div>
    </div>
  );
};

export default Input;