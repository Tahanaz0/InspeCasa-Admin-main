import React from "react";
import "./ReportDetailView.css";
import { useParams, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import { IoIosArrowDown } from "react-icons/io";

const data = [
  {
    mainImage: "/images/viewi.png",
    title: "Ocean View Complex",
    description: "A modern villa with a private pool and elegant architecture.",
    address: "45B Beach Rd, Miami",
    status: "Certified",
    percent: 100,
    sections: [
      {
        name: "Living Room",
        status: "Good",
        description: `The kitchen shows several signs of wear and requires attention. The paint on the walls is chipped and discolored, particularly around areas exposed to moisture such as above the sink and behind the stove. There are visible grease stains and signs of water damage in some corners, suggesting poor ventilation or leakage.

The cabinets are aged and show noticeable damage. A few cabinet doors are misaligned and some handles are missing.The living room is in good condition. The paint on the walls is clean and even, with no visible stains, cracks, or discoloration.`,
        photos: [
          "/images/Mask.png",
          "/images/living2.png",
          "/images/living3.png",
          "/images/living4.png",
        ],
      },
      {
        name: "Kitchen",
        status: "Damaged",
        description: `The kitchen shows several signs of wear and requires attention. The paint on the walls is chipped and discolored, particularly around areas exposed to moisture such as above the sink and behind the stove. There are visible grease stains and signs of water damage in some corners, suggesting poor ventilation or leakage.
        The cabinets are aged and show noticeable damage. A few cabinet doors are misaligned and some handles are missing or broken. `,
        photos: [
          "/images/damaged1.png",
          "/images/damaged2.png",
          "/images/damaged3.png",
          "/images/demaged4.png",
        ],
      },
      {
        name: "Bedroom",
        status: "Clean",
        description:
          "The bedroom is in good condition overall. The walls are neatly painted with no visible cracks, stains, or signs of dampness. The ceiling is also clean and intact, showing no damage or leakage. Lighting fixtures are properly installed and fully functional, providing sufficient brightness throughout the space. The flooring is in excellent shape, with no scratches, cracks, or loose tiles/boards. The windows are secure, easy to open and close, and provide ample natural light and ventilation.",
        photos: [
          "/images/clean1.png",
          "/images/clean2.png",
          "/images/clean3.png",
          "/images/clean4.png"
        ],
      },

      {
        name: "Bathroom",
        status: "Fair",
        description: `The bathroom is currently in poor condition and requires multiple repairs. The wall tiles are stained and several are either cracked or missing, especially around the shower and sink areas. The floor tiles are also chipped in places and the grout lines appear dark and unhygienic.
There are visible signs of water leakage near the base of the toilet and under the sink. The sink tap is loose and dripping constantly, indicating plumbing issues. The showerhead is partially blocked and water pressure is inconsistent.`,
        photos: [
          "/images/fair1.png",
          "/images/fair2.png",
          "/images/fair3.png",
          "/images/fair4.png"
        ],
      },
    ],
    overallCondition: "Excellent",
    date: "2024-06-01",
    inspector: "Areeba Khan",
    signature: "Areeba",
  },
  // ... more reports if needed ...
];

const ReportView = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const report = data[index];
  if (!report) return <div>Report not found</div>;

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(report.title, 10, 10);
    doc.text(report.description, 10, 20);
    doc.text(`Address: ${report.address}`, 10, 30);
    doc.text(`Inspector: ${report.inspector}`, 10, 40);
    doc.text(`Date: ${report.date}`, 10, 50);
    doc.text(`Overall Condition: ${report.overallCondition}`, 10, 60);
    doc.save(`${report.title.replace(/\s+/g, "_")}_report.pdf`);
  };

  return (
    <div className="reportview-main">
      <img
        src={report.mainImage}
        alt="Main"
        className="reportview-main-image"
      />

      <div className="reportview-header">
        <h2 className="reportview-title">{report.title}</h2>
        <button
          className="reportview-exit-btn"
          onClick={() => navigate("/report")}
        >
          ✖
        </button>
      </div>
      <div className="reportview-info">
        <h2>Description</h2>
        <div className="reportview-desc">{report.description}</div>
        <div className="reportview-address">📍 {report.address}</div>
        <div className="reportview-statusbar">
          {/* <span className="reportview-status-badge">{report.status}</span> */}
          <span className="reportview-completed-badge">Completed</span>
          <span className="reportview-percent">{report.percent}% Complete</span>
        </div>
          <div className="comp"> </div>

      </div>
      {report.sections.map((section, idx) => (
        <div
          key={idx}
          className={` ${
            section.name === "Living Room" ? "highlight-section" : ""
          }`}
        >
          <div className="section-title-with-arrow">
            <span className="arrow-icon">
              <IoIosArrowDown
                style={{
                  width: "20px",
                }}
              />
            </span>
            <span className="reportview-section-title">{section.name}</span>
          </div>

          {/* ✅ Checkbox + status badge below title */}
          <div className="reportview-section">
            <div className="section-status-vertical">
              <label className="custom-checkbox-wrapper">
                <input type="checkbox" className="custom-checkbox" />
                <span className="checkmark"></span>
              </label>
              <span
                className={`reportview-section-badge ${section.status
                  .toLowerCase()
                  .replace(/\s/g, "")}`}
              >
                {section.status}
              </span>
            </div>
            <br />
            <p>Comment:</p>
        

            <div className="reportview-section-desc">{section.description}</div>

            <div className="reportview-photo-grid">
              {section.photos.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="room"
                  className="reportview-photo"
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="reportview-overall">
        <h4>Overall Condition</h4>
        <div className="overall-checkbox-row">
          <label className="overall-checkbox-label">
            <input type="checkbox" checked readOnly className="overall-checkbox" />
            <span className="overall-checkbox-custom"></span>
            <span className="overall-checkbox-text">Good</span>
          </label>
        </div>
        <div className="overall-meta-row">
          <div className="overall-meta-item">
            <span className="overall-label">Date:</span>
            <span className="overall-value dotted-underline">{report.date}</span>
          </div>
          <div className="overall-meta-item">
            <span className="overall-label">Inspector:</span>
            <span className="overall-value dotted-underline">{report.inspector.split(' ')[0]}</span>
          </div>
          <div className="overall-meta-item">
            <span className="overall-label">Signature:</span>
            <span className="overall-value dotted-underline signature-cursive">{report.signature}</span>
          </div>
        </div>
        <div className="overall-btn-row">
          <button className="overall-screenshot-btn">Screenshort</button>
          <button className="overall-back-btn" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
      <div className="reportview-btn-row">
        <button className="reportview-download-btn" onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
};

export default ReportView;
