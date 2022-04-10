import React, { Fragment } from "react";
import entities from "../../data/commercial-entities.json";

import MainCard from "../MainCard/MainCard";

function RecordsList() {
  return (
    <Fragment>
      <div className="list-col">
        {entities?.map((item) => (
          <MainCard key={item.id} {...item} />
        ))}
      </div>
    </Fragment>
  );
}

export default RecordsList;
