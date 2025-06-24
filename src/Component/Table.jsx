import React from "react";
import { FaEye, FaDownload, VscEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
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
    condition: "Needs Repair",
    inspector: "Emma Collins",
    signature: "Areeba",
  },
  {
    image: "/images/house2.png",
    property: "Coral Heights",
    condition: "Needs Repair",
    inspector: "Emma Collins",
    signature: "Areeba",
  },
  {
    image: "/images/house2.png",
    property: "White Haven Cottage",
    condition: "Needs Repair",
    inspector: "Emma Collins",
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
              <td className="table-cell">
                <div className="property-info">
                  <img
                    src={item.image}
                    alt={item.property}
                    className="property-image"
                  />
                  <span className="property-name">
                    {item.property.trim()}
                  </span>
                </div>
              </td>
              <td className="table-cell">{item.condition}</td>
              <td className="table-cell">{item.inspector}</td>
              <td className="table-cell signature">
                {item.signature && capitalize(item.signature)}
              </td>
              <td className="table-cell">
                <div className="actions">
                  <VscEye className="icon eye" />
                  <FaDownload className="icon download" />
                  <RiDeleteBin6Line className="icon trash" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InspectionTable;