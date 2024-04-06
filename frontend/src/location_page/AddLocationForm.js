import React, { useState } from "react";
import axios from "axios";

const AddLocationForm = () => {
  // State variables to store the input values
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new location object with the input values
    const newLocation = {
      name: name,
      address: address,
      phone: phone,
    };

    console.log("New Location", newLocation);

    const response = await axios.post(
      "http://localhost:8080/api/location/create",
      newLocation
    );

    // Clear the form fields after submission
    setName("");
    setAddress("");
    setPhone("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgb(194, 239, 239)",
          height: "400px",
          width: "300px",
          marginLeft: "350px",
          marginTop: "60px",
          padding: "50px",
          borderRadius: "100px",
        }}
      >
        <h1 style={{ marginLeft: "20px" }}>Add New Location</h1>
        <h3 style={{ color: "#334d4d" }}>Enter below details</h3>
        <label>
          Name :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Address :
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Phone :
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button
          type="submit"
          style={{
            borderRadius: "10px",
            padding: "7px",
            background: "rgba(255, 51, 51,0.5)",
            marginLeft: "70px",
            border: "none",
          }}
        >
          Add Location
        </button>
      </form>
    </div>
  );
};

export default AddLocationForm;
