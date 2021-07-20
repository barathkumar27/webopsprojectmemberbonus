import React from "react";
//import countries from "./countries";

export default function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [bday, setBday] = React.useState("");  
  //const [country, setCountry] = React.useState("");
  //const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    
    <div>name:{name}</div>
    console.log(`
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Age: ${age}
      Gender: ${gender}
      Date of Birth: ${bday}
    `);

    event.preventDefault();
  }

  return (
    <div textAlign="center">
    <form onSubmit={handleSubmit}>
      <h1>Enter Details:</h1>
      
      <label>
        Name:
        <input
          name="name"
          type="string"
          value={name}
          onChange={e => setName(e.target.value)}
          required />
      </label>
      <br />
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      <br />
      <label>
        Phone:
        <input
          name="phone"
          type="number"
          value={phone} 
          onChange={e => setPhone(e.target.value)}
          required />
      </label>
      <br />
      <label>
        Age:
        <input
          name="age"
          type="number"
          value={age} 
          onChange={e => setAge(e.target.value)}
          required />
      </label>
      <br />
      <label>
        Gender:
        <select placeholder="gender" type="string" id="gend">
                <option value="male">male</option>
                <option value="Female">Female</option>
                <option value="Others">other</option>
                onChange={e => setGender(e.target.value)}
        </select>
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          name="bday"
          type="date"
          value={bday} 
          onChange={e => setBday(e.target.value)}
          required />
      </label>
      <br />
      <button>Submit</button>
    </form>
    </div>
  );
}

