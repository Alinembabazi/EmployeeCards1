
// export default EmployeeCard;
import React from 'react';

const EmployeeCard = ({ user }) => {
  // Destructuring keys from the user object
  const { id, name, email, phone, website, company } = user;

  const handlePrintCard = () => {
    window.print();
  };

  return (
    <div className="employee-card">
      <div className="card-header">
        <span className="id-badge">#{id}</span>
        <h3>{name}</h3>
      </div>
      <div className="card-body">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noreferrer">{website}</a></p>
        <p><strong>Company:</strong> {company.name}</p>
      </div>
      <div className="card-actions">
        <button onClick={handlePrintCard} className="print-btn">Print Card</button>
      </div>
    </div>
  );
};

export default EmployeeCard;