import React, { useState } from "react";
import "./AddMembersSublocation.scss";
import { useSelector, useDispatch } from "react-redux";
import { addMember } from "./membersSlice";

const AddMembersSublocation = () => {
  const members = useSelector((state) => state.membersContainer.members);
  const dispatch = useDispatch();
  const [inputMember, setInputMember] = useState("");
  const addMemberToStore = (memberName) => {
    dispatch(addMember(memberName));
  };

  /**
   * @param {string} inputString
   */
  const processInputForMember = (inputString) => {
    inputString = inputString.toLowerCase();
    if (inputString === "") {
      alert("Invalid input");
      return;
    }

    if (members.includes(inputString)) {
      alert(`Member with name "${inputString}" already exist`);
      return;
    }
    addMemberToStore(inputString);
  };

  return (
    <div className="add-members-sublocation-parent">
      <div className="add-members-heading">Members</div>

      <div className="add-members-input-section">
        <input
          type="text"
          onChange={(e) => {
            setInputMember(e.target.value);
          }}
        />

        <button
          type="button"
          onClick={() => {
            processInputForMember(inputMember);
          }}
        >
          Add me
        </button>
      </div>
    </div>
  );
};

export default AddMembersSublocation;
