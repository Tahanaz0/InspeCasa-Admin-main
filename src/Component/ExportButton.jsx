import React from "react";
import { LuArrowDownToLine } from "react-icons/lu";
import './Users/User.css'

function ExportButton() {
  const handleExport = () => {
    const data = [
      ["Name", "Age", "City"],
      ["Taha", "23", "Lahore"],
      ["Ali", "25", "Karachi"],
      ["Ayesha", "22", "Islamabad"],
    ];

    const csvContent = data.map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
     className="button-custom"
    >
      <LuArrowDownToLine style={{
        color:'#008080'
      }} />
      Export
    </button>
  );
}

export default ExportButton;
