import React, { useState } from "react";
import "./Report.css";
import ExportButton from "../ExportButton";
import Table from "../Table";

export default function Report() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInspectors, setSelectedInspectors] = useState([]);
  const inspectors = [
    { value: "olivia", label: "Olivia Carter" },
    { value: "ethan", label: "Ethan Mitchell" },
    { value: "emma", label: "Emma Collins" },
    { value: "noah", label: "Noah Brooks" },
  ];

  const handleSelect = (inspector) => {
    if (selectedInspectors.includes(inspector.label)) {
      setSelectedInspectors(selectedInspectors.filter(i => i !== inspector.label));
    } else {
      setSelectedInspectors([...selectedInspectors, inspector.label]);
    }
  };

  const handleFilter = () => {
    setModalOpen(false);
    // You can add your filter logic here
  };

  return (
    <>
      <div className="report-container">
        <div className="input-section1">
          <p className="para1">Start Date</p>
          <input type="date" className="date-input" />
        </div>
        <div className="input-section1">
          <p className="para2">End Date</p>
          <input type="date" className="date-input" />
        </div>
        <div className="input-section2">
          <p className="para2">Find by Inspector</p>
          <div style={{ position: 'relative' }}>
            <div
              className={`custom-select-wrapper${modalOpen ? " open" : ""}`}
              tabIndex={0}
              onClick={() => setModalOpen(true)}
            >
              <div className="custom-select-display">
                {selectedInspectors.length > 0 ? selectedInspectors.join(", ") : "Find your inspector"}
                <span className={`custom-select-arrow${modalOpen ? " open" : ""}`}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8L10 12L14 8" stroke="#008080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
            {modalOpen && (
              <div className="custom-select-modal-overlay" onClick={() => setModalOpen(false)}>
                <div className="custom-select-modal-card left-align" onClick={e => e.stopPropagation()}>
                  <button className="custom-select-modal-close" onClick={() => setModalOpen(false)} aria-label="Close">&times;</button>
                  <div className="custom-select-modal-title">Select Inspector</div>
                  <div className="custom-select-modal-divider" />
                  <div className="custom-select-modal-options">
                    {inspectors.map((inspector) => (
                      <label
                        key={inspector.value}
                        className={`custom-select-modal-option${selectedInspectors.includes(inspector.label) ? " selected" : ""}`}
                        style={{ justifyContent: 'flex-start' }}
                      >
                        <input
                        
                          type="checkbox"
                          checked={selectedInspectors.includes(inspector.label)}
                          readOnly
                          className="custom-select-checkbox"
                          tabIndex={-1}
                          onClick={() => handleSelect(inspector)}
                        />
                        <span className={selectedInspectors.includes(inspector.label) ? "option-label-bold" : ""}>{inspector.label}</span>
                      </label>
                    ))}
                  </div>
                  <button className="custom-select-filter-btn" onClick={handleFilter}>Filter</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="input-section2">
          <ExportButton />
        </div>
      </div>
      <Table />
    </>
  );
}
