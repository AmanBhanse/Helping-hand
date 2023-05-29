import React from "react";
import AddMembersSublocation from "../../components/AddMembersSublocation/AddMembersSublocation";
import AddItemsSublocation from "../../components/AddItemsSublocation/AddItemsSublocation";
import InvolvementMatrix from "../../components/InvolvementMatrix/InvolvementMatrix";

const Splitify = () => {
  return (
    <div>
      <AddMembersSublocation />
      <AddItemsSublocation />
      <InvolvementMatrix />
    </div>
  );
};

export default Splitify;
