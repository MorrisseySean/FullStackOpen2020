import React from "react";

const Notification = ({ message, setMsg }) => {
  if (message.msg === null) {
    return null;
  }
  setTimeout(() => {
    setMsg({ msg: null, type: null });
  }, 3000);
  return <div className={message.type}>{message.msg}</div>;
};

export default Notification;
