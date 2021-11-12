import React from "react";

import { RepopulateRecord } from "../../utils/api/record";

let buttonCommon = "p-3 bg-gray-300 rounded-md";

const Admin = () => {
  const Repopulate = () => {
    console.log(Repopulate);
  };
  return (
    <div className="p-8">
      <div>Admin view</div>
      <button className={buttonCommon} onClick={() => RepopulateRecord()}>
        Repopulate DB{" "}
      </button>
    </div>
  );
};

export default Admin;
