import React from "react";
import { BiSolidDownload } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscEye } from "react-icons/vsc";
import "./Report/Report.css";

const data = [
  {
    image: "/images/house1.png",
    property: "Rosewood Villa",
    condition: "Good",
    inspector: "Olivia Carter",
    signature: "areeba",
  },
  {
    image: "/images/house2.png",
    property: "Blue Pearl Residency",
    condition: "Damaged",
    inspector: "Ethan Mitchell",
    signature: "AREEBA",
  },
  {
    image: "/images/house2.png",
    property: "Sunny Side Bungalow",
    condition: "Needs Repair",
    inspector: "Emma Collins",
    signature: "Areeba",
  },
  {
    image: "/images/house2.png",
    property: "Brickstone House",
    condition: "Good",
    inspector: "Olivia Carter",
    signature: "Areeba",
  },
  {
    image: "/images/house2.png",
    property: "Coral Heights",
    condition: "Damage",
    inspector: "Ethan Mitchell",
    signature: "Areeba",
  },
  {
    image: "/images/house2.png",
    property: "White Haven Cottage",
    condition: "Needs Repair",
    inspector: "Emma Collins",
    signature: "Areeba",
  },
  {
    image: "/images/house2.png",
    property: "Brickstone House",
    condition: "Good",
    inspector: "Olivia Carter",
    signature: "Areeba",
  },
  {
    image: "/images/house2.png",
    property: "Coral Heights",
    condition: "Damage",
    inspector: "Ethan Mitchell",
    signature: "Areeba",
  },
  {
    image: "/images/house2.png",
    property: "White Haven Cottage",
    condition: "Needs Repair",
    inspector: "Emma Collins",
    signature: "Areeba",
  },
  {
    image: "/images/house2.png",
    property: "Brickstone House",
    condition: "Good",
    inspector: "Olivia Carter",
    signature: "Areeba",
  },
];

const InspectionTable = () => {
  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr className="table-header-row">
            <th className="table-header">Property</th>
            <th className="table-header">Overall Condition</th>
            <th className="table-header">Inspector</th>
            <th className="table-header">Signature</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="table-row">
              <td className="table-cell" data-label="Property">
                <div className="property-info">
                  <img
                    src={item.image}
                    alt={item.property}
                    className="property-image"
                  />
                  <span className="property-name">{item.property.trim()}</span>
                </div>
              </td>
              <td className="table-cell" data-label="Overall Condition">{item.condition}</td>
              <td className="table-cell" data-label="Inspector">{item.inspector}</td>
              <td className="table-cell signature" data-label="Signature">
                {item.signature && capitalize(item.signature)}
              </td>
              <td className="table-cell" data-label="Actions">
                <div className="actions">
                  <VscEye className="icon eye" />
                  <BiSolidDownload className="icon download" />
                  <RiDeleteBin6Line className="icon trash" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <div className="entry-info">Showing 1 to 3 of 12 entries</div>
        <div className="pagination">
          <button className="arrow">{"<"}</button>
          <button className="page">1</button>
          <button className="page">2</button>
          <button className="page">3</button>
          <button className="arrow">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default InspectionTable;
