import React from "react";
import licenses from "../../data/licesnses.json";
import SubCard from "../SubCard/SubCard";
function LicencesList() {
  return (
    <>
      <div className="m-20">
      <h2 className="color-main m-20">إحصائيات الرخص والتراخيص</h2>
      <div className="list-row">
        {licenses?.map((item) => (
          <SubCard key={item.id} {...item} />
        ))}
      </div>
      </div>
    </>
  );
}

export default LicencesList;
