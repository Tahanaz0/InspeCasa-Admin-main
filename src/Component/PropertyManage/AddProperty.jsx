import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
    boxShadow: 'none',
    border: 'none',
    outline: 'none',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
};

const AddProperty = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>

            <div onClick={handleOpen} className='add-card'>
                <img className='add-icon' src="/images/plus.svg" alt="" />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className='user-header'>
                            <p> Add New Property</p>
                            <FontAwesomeIcon icon={faXmark} className='close' onClick={handleClose} />
                        </div>
                    </Typography>

                    <div className='main-modal-container'>
                        <div className='inner-modal-container'>
                            <div className='photos-sec'>
                                <div>
                                    <p>photos</p>
                                </div>
                                <div className='plus-photo'>
                                    <img src="/images/miniplus.svg" alt="" />
                                    <p>Add Photos</p>
                                </div>
                            </div>

                            <div className='image-sec'>
                                <img src="/images/icon1.svg" alt="" />
                                <img src="/images/icon2.svg" alt="" />
                                <img src="/images/icon3.svg" alt="" />
                                <img src="/images/icon4.svg" alt="" />
                                <img src="/images/icon5.svg" alt="" />
                                <img src="/images/icon6.svg" alt="" />
                            </div>

                            <div className='modal-property-title'>
                                <p>Title</p>
                                <input type="text" placeholder='Title' />
                            </div>

                            <div className='modal-property-des'>
                                <p>Description</p>
                                <input type="text" placeholder='Enter property description' />
                            </div>

                            <div className='modal-property-loc'>
                                <p>Location</p>
                                <input type="text" placeholder='Location' />
                            </div>

                            <div className='modal-property-checklist'>
                                <p>Check List</p>
                                <div className='kitchen'>
                                    <p className='para-kitchen'>Kitchen</p>
                                    <img src="/images/checklist.svg" alt="" />
                                </div>

                                <div className='kitchen'>
                                    <p className='para-kitchen'>Bedroom</p>
                                    <img src="/images/checklist.svg" alt="" />
                                </div>

                            </div>

                            <div className='modal-property-amenities'>
                                  <button>Cancel</button>
                                   <button>Create Property</button>
                            </div>

                        </div>
                    </div>


                </Box>
            </Modal>
        </div>
    );
}

export default AddProperty
