import React from "react";
import LicencesList from "../../components/LicensesList/LicencesList";
import RecordsList from "../../components/RecordsList/RecordsList";
import SideNav from "../../components/SideNav/SideNav";

function BusinessRecords() {
  return (
    <main>
      <SideNav />
      <div className="content">
        <h1>قائمة السجلات التجارية</h1>
        <div className="tabs"></div>
        <div className="">
          <RecordsList />
          <LicencesList />
        </div>
      </div>
    </main>
  );
}

export default BusinessRecords;
