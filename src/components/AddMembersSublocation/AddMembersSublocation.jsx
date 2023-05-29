import React, { useState, useEffect } from 'react';
import './AddMembersSublocation.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addMember, removeMember } from './membersSlice';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Tag from '../Tag/Tag';

const AddMembersSublocation = () => {
  const members = useSelector((state) => state.membersContainer.members);
  const dispatch = useDispatch();
  const [inputMember, setInputMember] = useState('');

  useEffect(() => {
    console.log(members);
  }, [members]);

  const addMemberToStore = (memberName) => {
    dispatch(addMember(memberName));
  };

  const removeMemberFromStore = (memberName) => {
    memberName = memberName.toLowerCase();
    dispatch(removeMember(memberName));
  };

  /**
   * @param {string} inputString
   */
  const processInputForMember = (inputString) => {
    inputString = inputString.toLowerCase();
    if (inputString === '') {
      alert('Invalid input');
      return;
    }

    if (members.includes(inputString)) {
      alert(`Member with name "${inputString}" already exist`);
      return;
    }
    addMemberToStore(inputString);
  };

  return (
    <div className='add-members-sublocation-container'>
      <div className='add-members-heading'>Add Members</div>

      <div className='add-members-input-section'>
        <input
          type='text'
          placeholder='Member Name'
          onChange={(e) => {
            setInputMember(e.target.value);
          }}
        />

        <button
          className='add-members-add-button'
          type='button'
          onClick={() => {
            processInputForMember(inputMember);
          }}>
          <AiOutlineUserAdd className='add-members-add-button-icon' />
        </button>
      </div>

      <div className='add-members-display-list'>
        <div className='member-list-heading'>Member list : </div>

        <div className='member-list-tag-list'>
          {members.map((item, idx) => {
            return (
              <Tag
                tagName={item}
                key={idx}
                onCloseAction={removeMemberFromStore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddMembersSublocation;
