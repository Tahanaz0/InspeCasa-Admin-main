import React from 'react';
import './Support.css';

const users = [
    {
        id: 1, name: 'Courtney',
        message: 'Euismod tortor sed eu etiam.',
        time: '10 mins',

        image: '/images/chat1.svg'
    },
    {
        id: 2,
        name: 'Devon Lane',
        message: 'Neque scelerisque consectetur.',
        time: '30 mins',
        image: '/images/chat2.svg'
    },
    {
        id: 3,
        name: 'Darrell Steward',
        message: 'Yes, we can definitely help you with that!',
        time: '12:05 PM',
        image: '/images/chat3.svg'

    },
    {
        id: 4,
        name: 'Marvin McKinney',
        message: 'Yes, we can definitely help you with that!',
        time: '12:05 PM',
        image: '/images/chat4.svg'

    },
    {
        id: 5,
        name: 'Cameron Williamson',
        message: 'Yes, we can definitely help you with that!',
        time: '12:05 PM',
        image: '/images/chat5.svg'

    },
    {
        id: 6,
        name: 'Devon Lane',
        message: 'Yes, we can definitely help you with that!',
        time: '12:05 PM',
        image: '/images/chat6.svg'

    },
    {
        id: 7,
        name: 'Guy Hawkins',
        message: 'Yes, we can definitely help you with that!',
        time: '12:05 PM',
        image: '/images/chat1.svg'

    },
    {
        id: 8,
        name: 'Ewan Lost',
        message: 'Yes, we can definitely help you with that!',
        time: '12:05 PM',
        image: '/images/chat3.svg'

    },
];

const Inbox = ({ onSelectUser, selectedUser }) => {
    return (
        <div className="inbox">
           
            <h3>Messages</h3>
             <div className='inner-inbox'>
            <input type="text" placeholder="Search Messages" className="searchInput" />
            </div>
            <ul >
                {users.map(user => (
                    <li
                        key={user.id}
                        className={selectedUser?.id === user.id ? 'active' : ''}
                        onClick={() => onSelectUser(user)}
                    >
                        <div className='user'>
                            <div className="avatar"> <img src={user.image} alt="avatar" className="avatar" /></div>
                            <div className='user-infor'>
                                <div className="names">{user.name}</div>
                                <div className="msg">{user.message}</div>
                            </div>
                        </div>
                        <span className="time">{user.time}</span>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default Inbox;
