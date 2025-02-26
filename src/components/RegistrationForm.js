import React, { useState } from "react";

function RegistrationForm({ onRegister }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", preference: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    //.trim() aik JavaScript string method hy jis se hum  string jo input hui hy uskay start aor end me se whitespace (yani spaces, tabs, aor new lines) remove krsktay
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email";
    //match() aik JavaScript string method hy jo check krta hy k jo string user ny di hy wooh agay defined pattern k aaccording hy ya nhi
    //^[^\s@]+ ka matlab hy k string k start me jo alphapets hain unmay space (/s) aor @ nahi hona chaheay 
    //@ ka matlab hy k iskay baad aik @ symbol lazmi aye 
    //[^\s@]+ ka matlab hy k  @ baad koi space aor @ nah aye 
   // \. ka matlab hy k dot aye 
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Phone must be 10 digits";
    ///^\d{10}$/ ka matlab hy k numbers me decimal nah aye aor number 10 digits ka ho 
    if (!formData.preference) newErrors.preference = "Please select a preference";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };// newErrors saray errors ko aik jaga collect krta hy 

  const handleSubmit = (e) => {//handleSubmit form submission handle kry ga jub user  submit button click kray ga 
    e.preventDefault();//e.preventDefault() isleay use hua hy takay default behavior nah ho form submission per yani page refresh nah ho 
    if (validate()) {//if (validate()) ye validate() function ko call kray ga jo check kray ga k inputs valid hain ya nhi yani jo pattern btaya hy uskay according hain ya nhi 
      onRegister(formData);//onRegister(formData) ye function tub run hoga jub if(valid()) tru hoga...
      //onRegister aik prop function hy jo  pass hoga parent component se user registration ko handle krny k leay ya  form data ko backend me bhejny k leay 
      //formData me woh sari information store hogi jo user ny input di hy 
      setFormData({ name: "", email: "", phone: "", preference: "" });
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>Name: <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></label>
      {errors.name && <p className="error">{errors.name}</p>}

      <label>Email: <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></label>
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Phone: <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></label>
      {errors.phone && <p className="error">{errors.phone}</p>}

      <label>Preference:
        <select value={formData.preference} onChange={(e) => setFormData({ ...formData, preference: e.target.value })}>
          <option value="">Select</option>
          <option value="Online">Online</option>
          <option value="In-Person">In-Person</option>
        </select>
      </label>
      {errors.preference && <p className="error">{errors.preference}</p>}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
