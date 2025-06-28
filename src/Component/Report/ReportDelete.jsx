import React from "react";
import "./Report.css"; // ya modal specific CSS
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "90vh",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  overflowY: "auto",
  border: "none",
  outline: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

const ReportDeleteModal = ({ open, onClose, reportId, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm(reportId);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6">
          <div className="user-header">
            <p>Delete Report</p>
            <FontAwesomeIcon icon={faXmark} className="close" onClick={onClose} />
          </div>

          <div className="delete-container">
            <div className="inner-delete">
              <img className="delete-icon" src="/images/delete.svg" alt="delete" />
              <h2 className="h2-delete">Delete Report</h2>
              <p className="para-delete">
                Are you sure you want to delete this report (ID: {reportId})?<br />
                This action cannot be undone.
              </p>
            </div>

            <div className="delete-btns">
              <button onClick={onClose}>Cancel</button>
              <button onClick={handleConfirm}>Delete</button>
            </div>
          </div>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ReportDeleteModal;
