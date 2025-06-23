// ImageViewModal.jsx
import React from 'react';
import { Modal, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 800,
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  outline: 'none',
  overflow: 'hidden',
};

const ImageViewModal = ({ open, handleClose, image }) => {
  if (!image) return null;

  return (
    <Modal open={!!open} onClose={handleClose || (() => {})}>
      <Box sx={style}>
        <img
          src={image}
          alt="Full view"
          style={{
            width: '100%',
            maxHeight: 'calc(100vh - 40px)',
            objectFit: 'cover',
            display: 'block',
            margin: '0 auto',
            borderRadius: '8px',
          }}
        />
      </Box>
    </Modal>
  );
};

export default ImageViewModal;
