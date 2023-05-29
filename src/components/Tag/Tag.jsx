import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Tag.scss";

const Tag = ({ tagName, onCloseAction }) => {
  if (onCloseAction === undefined) {
    throw new Error(`onCloseAction not defined for ${tagName} tag.`);
  }

  return (
    <div className="tag-container">
      <div className="tag-title">
        <span className="tag-name"> {tagName}</span>
      </div>
      <div className="tag-close-button">
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Tag;
