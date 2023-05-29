import React from "react";
import { useSelector } from "react-redux";
import "./InvolvementMatrix.scss";
import { RxCross1 } from "react-icons/rx";

const InvolvementMatrix = () => {
  const members = useSelector((state) => state.membersContainer.members);
  const itemsMeta = useSelector((state) => {
    return state.itemsStore.itemsMeta;
  });

  const dummyMembers = ["Aman", "baloo"];
  const dummyItemMeta = [
    { itemName: "drinks", totalItemPriceOnBill: 34.6 },
    { itemName: "Food", totalItemPriceOnBill: 50 },
  ];

  return (
    <div className="involvement-matrix-container">
      <div className="involvement-matrix-intersection-cell">
        <RxCross1 />
      </div>
      <div className="involvement-matrix-row-headers"></div>
      <div className="involvement-matrix-col-headers">asasdasdasdsa</div>
      <div className="involvement-matrix-data-grid"></div>
    </div>
  );
};

export default InvolvementMatrix;
