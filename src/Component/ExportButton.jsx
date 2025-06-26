import React from "react";
import { LuArrowDownToLine } from "react-icons/lu";
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
      style={{
        backgroundColor: "#B4E5E3", // light green
        color: "#008080",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        width:'100%',
        cursor: "pointer",
        fontWeight: "bold",
        marginTop:'30%'
      }}
    >
      <LuArrowDownToLine style={{
        color:'#008080'
      }} />
        Export
    </button>
  );
}

export default ExportButton;
