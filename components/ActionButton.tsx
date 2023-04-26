import React from "react";

type ButtonProps = {
    text:string,
    className:string,
};

const ActionButton = (props: ButtonProps) => {
  return (
    <button className={`${props.className} bg-gradient-to-r from-limeGreen to-brightCyan text-sm px-5 py-2 text-white rounded-full hover:opacity-60`}>
      {props.text}
    </button>
  );
};

export default ActionButton;
