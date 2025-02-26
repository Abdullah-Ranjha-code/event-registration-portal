import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import Confirmation from "./components/Confirmation";
import UserTable from "./components/UserTable";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]); //yahan user ki reegrestration store hogi 
  const [currentUser, setCurrentUser] = useState(null); // pichlay  user ki regestration store hogi 
  const [step, setStep] = useState("form"); // ye pehlay form ki shakal me hoga lekin baad me confirmation aor table ki shakal me hoga 

  const handleRegister = (userData) => {
    setUsers([...users, userData]); //yahan new user ko list me add karay ga setUsers
    setCurrentUser(userData); //  yahan current user conformation  k leay set hoga 
    setStep("confirmation"); //is se form page se confirmation page open hojaye ga 
  };

  return (
    <div className="container">
      <h1>Event Registration Portal</h1>
      {step === "form" && <RegistrationForm onRegister={handleRegister} />}
      {step === "confirmation" && (
        <Confirmation user={currentUser} onBack={() => setStep("form")} onViewUsers={() => setStep("users")} />
      )}
      {step === "users" && <UserTable users={users} onBack={() => setStep("form")} />}
    </div>
  );
}
export default App;
