import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Tag.scss';

const Tag = ({ tagName, tagValue, onCloseAction }) => {
  if (onCloseAction === undefined) {
    throw new Error(`onCloseAction not defined for ${tagName} tag.`);
  }

  return (
    <div className='tag-container'>
      <div className='tag-details'>
        <span className='tag-name'> {tagName}</span>
        {tagValue && <span className='tag-value'> : {tagValue}</span>}
      </div>
      <div
        className='tag-close-button'
        onClick={() => {
          onCloseAction(tagName);
        }}>
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Tag;
