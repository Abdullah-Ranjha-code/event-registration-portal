import React from "react";

function Confirmation({ user, onBack, onViewUsers }) {
  return (
    <div className="confirmation-container">
      <h2>Registration Confirmed!</h2>
      <p>Thank you, <strong>{user.name}</strong>, for registering.</p>
      <button onClick={onBack}>Register Another</button>
      <button onClick={onViewUsers}>View Registered Users</button>
    </div>
  );
}

export default Confirmation;
