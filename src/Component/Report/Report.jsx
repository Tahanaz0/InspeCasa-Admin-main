import React from "react";
import "./Report.css";
import ExportButton from "../ExportButton";
import Table from "../Table";
export default function Report() {
  return (
    <>
      <div className="report-container">
        <div className="input-section1">
          <p className="para1">Start Date</p>
          <input type="date" />
        </div>
        <div className="input-section1">
          <p className="para2">End Date</p>
          <input type="date" />
        </div>
        <div className="input-section1">
          <p className="para2">Find by Inspector</p>
          <input type="list" />
        </div>
        <div className="input-section2">
             <ExportButton />
        </div>
      </div>
      <Table/>
    </>
  );
}
