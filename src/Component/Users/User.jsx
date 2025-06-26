import React, { useEffect, useRef, useState } from 'react';
import './User.css';
import UserAddForm from './UserAddForm';
import UserDelete from './UserDelete';



const users = [
  {
    name: 'Daniel',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Inspector',
    status: 'Active',
  },
  {
    name: 'Jassica',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Admin',
    status: 'Moderate',
  },
  {
    name: 'Daniel',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Inspector',
    status: 'Decline',
  },
  {
    name: 'Jassica',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Inspector',
    status: 'Active',
  },
  {
     name: 'Daniel',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Inspector',
    status: 'Moderate',
  },
  {
     name: 'Jassica',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Inspector',
    status: 'Decline',
  },
  {
    name: 'Daniel',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Inspector',
    status: 'Active',
  },
  {
    name: 'Jassica',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Inspector',
    status: 'Moderate',
  },
  {
     name: 'Daniel',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Inspector',
    status: 'Decline',
  },
  {
      name: 'Jassica',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Inspector',
    status: 'Active',
  },
  {
        name: 'Daniel',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Inspector',
    status: 'Moderate',
  },
  {
       name: 'Jassica',
    email: 'hafsa@gmail.com',
    phone: '+92 123456789',
    userType: 'Inspector',
    status: 'Decline',
  },
];

const User= () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const handleToggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div>
        <UserAddForm />
      </div>
       {/* <div className='add-card'>
        <img className='add-icon' src="/images/plus.svg" alt="pus" />
      </div> */}
      <div className="table-container">
        <table className='user-table'>
          <thead>

            <tr className='th'>
              <th>Name</th>
              <th>Email Address</th>
              <th>Phone No</th>
              <th>User Type</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.userType}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td className="actions-cell">
                  <span
                    className="dots"
                    onClick={() => handleToggleDropdown(index)}
                  >
                    ⋮
                  </span>
                  {openDropdown === index && (
                    <div className="dropdown" ref={dropdownRef}>
                      <button>Edit</button>
                      <button><UserDelete/></button>
                      <button>Accept</button>
                      <button>Decline</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="footer">
          <p>Showing 1 to {users.length} of 12 entries</p>
          <div className="pagination">
            <button className="prev">◀</button>
            <button className="page active">1</button>
            <button className="page">2</button>
            <button className="page">3</button>
            <button className="next">▶</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;

