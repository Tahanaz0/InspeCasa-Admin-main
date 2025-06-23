// PropertyViewModal.jsx
import React, { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons';
import ImageViewModal from './ImageViewModal'; // ⬅️ import added

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    overflowY: 'auto',
    // boxShadow: 'none',
    border: 'none',
    outline: 'none',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
};

const PropertyViewModal = ({ open, handleClose, card }) => {
    const [imageModalOpen, setImageModalOpen] = useState(false); 
    if (!card) return null;

    const { image, title, location, description, progress } = card;

    return (
        <>
            <Modal open={!!open} onClose={handleClose || (() => {})}>
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        <div className='user-header'>
                            <p>Property Detail</p>
                            <FontAwesomeIcon icon={faXmark} className='close' onClick={handleClose} />
                        </div>
                    </Typography>
                    <div className='property-view-modal'>
                        <img
                            className='view-image'
                            src={image}
                            alt="Property"
                            onClick={() => setImageModalOpen(true)}
                            style={{ cursor: 'pointer' }}
                        />
                        <div className='inner-property-view'>
                            <h2>{title}</h2>
                            <h2 className='des-head'>Description</h2>
                            <p className='descrip'>{description}</p>
                            <div className='location-cont'>
                                <FontAwesomeIcon className='loc-icon' icon={faLocationDot} /><span>{location}</span>
                            </div>
                            <div className='progess-cont'>
                                <div className='progress-wrapper'>
                                    <div className='progress-bar-container'>
                                        <span className="progress-text">{progress}%</span>
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='view-checklist'>
                                <p className='check-para'>Checklist</p>
                                <div className='checklist-item'>
                                    <p>Living room</p>
                                    <input className='my-checkbox' type="checkbox" />
                                </div>
                            </div>
                            <div className='view-checklist2'>
                                <div className='checklist-item'>
                                    <p>Kitchen</p>
                                    <input className='my-checkbox' type="checkbox" />
                                </div>
                            </div>
                            <div className='view-checklist2'>
                                <div className='checklist-item'>
                                    <p>Bedroom</p>
                                    <input className='my-checkbox' type="checkbox" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>

            <ImageViewModal
                open={imageModalOpen}
                handleClose={() => setImageModalOpen(false)}
                image={image}
            />
        </>
    );
};

export default PropertyViewModal;
