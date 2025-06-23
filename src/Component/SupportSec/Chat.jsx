import React from 'react';
import './Support.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Chat = ({ selectedUser, onBack, isMobile }) => {
  if (!selectedUser) {
    return <div className="chat-empty"><p>Select a conversation</p></div>;
  }

  return (
    <div className="chat">
      <div className="chat-header">
            {isMobile && (
          <button className="back-button" onClick={onBack}>
           <FontAwesomeIcon className='left' icon={faArrowLeft} />
          </button>
        )}
        <div className="avatar"> <img src={selectedUser.image} alt="avatar" className="avatar" /></div>
        <div className='chat-name'>{selectedUser.name}</div>
      </div>
      <div className="chat-body">
        <div className="message left">Hi Kitsbase, Let me know you need help...</div>
        <div className="message right">Hi, I need help with my upcoming booking?</div>
        <div className="message left">What seems to be the issue?</div>
        <div className="message right">
          I booked a cleaning service for this Saturday... Can I change the date?
        </div>
        <div className="message left">Yes. we can definitely help you with that!</div>
        <div className="message left">Hi Kitsbase, Let me know you need help...</div>
        <div className="message right">Hi, I need help with my upcoming booking?</div>
        <div className="message left">What seems to be the issue?</div>
        <div className="message right">
          I booked a cleaning service for this Saturday... Can I change the date?
        </div>
        <div className="message left">Yes. we can definitely help you with that!</div>
      </div>
      <div className="chat-footer">
        <input type="text" placeholder="Type a message" />
       <img className='send' src="/images/send.svg" alt="" />
      </div>
    </div>
  );
};

export default Chat;
