// CardSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import AddProperty from './AddProperty';
import PropertyViewModal from './PropertyViewModal';

const cards = [
    {
        image: "/images/card1.svg",
        avator: "/images/image1.svg",
        title: 'Rosewood Villa',
        location: 'Paris, France',
        status: 'Pending',
        user: 'Olivia Cole',
        date: '25 Dec',
        progress: 75,
        description: 'Elegant 4-bed villa with garden views, modern design, and river access in central Paris.'
    },
    {
        image: "/images/card2.svg",
        avator: "/images/image2.svg",
        title: 'Blue Pearl Residency',
        location: 'Lisbon, Portugal',
        status: 'In Review',
        user: 'Ethan Walker',
        date: '25 Dec',
        progress: 50,
        description: 'Modern seaside apartment with ocean views and sleek interiors in vibrant Lisbon.'
    },
    {
        image: "/images/card3.svg",
        avator: "/images/image3.svg",
        title: 'Sunny Side Bungalow',
        location: 'Brisbane, Australia',
        status: 'Pending',
        user: 'Emma Collins',
        date: '25 Dec',
        progress: 30,
        description: 'Modern seaside apartment with ocean views and sleek interiors in vibrant Lisbon.'

    },
    {
        image: "/images/card4.svg",
        avator: "/images/image4.svg",
        title: 'Brickstone House',
        location: 'Berlin, Germany',
        status: 'Rejected',
        user: 'Noah Schmidt',
        date: '25 Dec',
        progress: 10,
        description: 'Classic brick home with vintage charm, located in a quiet Berlin neighborhood.'

    },
    {
        image: "/images/card5.svg",
        avator: "/images/image5.svg",
        title: 'Coral Heights',
        location: 'Cape Town, South Africa',
        status: 'Approved',
        user: 'Sophia Brown',
        date: '25 Dec',
        progress: 95,
        description: 'Luxury high-rise with panoramic sea views, near Cape Town’s vibrant waterfront.'

    },
    {
        image: "/images/card6.svg",
        avator: "/images/image6.svg",
        title: 'White Haven Cottage',
        location: 'Vancouver, Canada',
        status: 'Pending',
        user: 'James Hall',
        date: '25 Dec',
        progress: 20,
        description: 'Cozy countryside cottage with whitewood finish, nestled in peaceful Vancouver suburbs.'

    }
];

const getStatusClass = (status) => {
    switch (status) {
        case 'Pending': return 'status-pending';
        case 'In Review': return 'status-review';
        case 'Approved': return 'status-approved';
        case 'Rejected': return 'status-rejected';
        default: return '';
    }
};

const Property = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const menuRef = useRef(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenuIndex(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };
    return (
        <>
            <AddProperty />
            <div className='input-wrapper'>
                <div>
                    <p className='para1'>Start Date</p>
                    <input type="date" />
                </div>
                <div>
                    <p className='para2'>End Date</p>
                    <input type="date" />
                </div>
            </div>
            <div className="card-container">

                {cards.map((card, index) => (
                    <div className="card" key={index} onClick={() => handleCardClick(card)}>
                        <img className="card-image" src={card.image} alt={card.title} />
                        <div className="date-badge">
                            <span>{card.date.split(' ')[0]}</span>
                            <span>{card.date.split(' ')[1]}</span>
                        </div>
                        <div className="card-content">
                            <div className='card-header'>
                                <div className={`status-badge ${getStatusClass(card.status)}`}>{card.status}</div>
                                <div className='dot' ref={menuRef} onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenMenuIndex(openMenuIndex === index ? null : index)
                                }}><FontAwesomeIcon icon={faEllipsisVertical} />
                                    {openMenuIndex === index && (
                                        <div className="menu-dropdown">
                                            <button>Edit</button>
                                            <button>Delete</button>
                                            <button>Assign</button>
                                        </div>
                                    )}</div>
                            </div>

                            <div className='progress-wrapper'>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: `${card.progress}%` }}></div>
                                    <span className="progress-text">{card.progress}%</span>
                                </div>
                            </div>

                            <div className='main-content'>
                                <div className='inner-content'>
                                    <h4>{card.title}</h4>
                                    <div className='location'>
                                        <p><span><FontAwesomeIcon icon={faLocationDot} /></span>{card.location}</p>
                                    </div>
                                </div>
                                <div className="user-info">
                                    <div>
                                        <img src={card.avator} alt="" />
                                    </div>
                                    <div>
                                        <p>{card.user}</p>
                                        <p className='inspector'>Inspector</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <PropertyViewModal
                open={isModalOpen}
                handleClose={handleCloseModal}
                card={selectedCard}
            />
        </>
    );
};

export default Property;
