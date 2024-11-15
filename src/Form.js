import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    emailAddress: "",
    password: "",
    confirmPassword: "",
    newsLetter: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
//npm build
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      alert("Successfully signed up!");
    } else {
      alert("Passwords do not match");
    }
  }

  return (
    <form className="pt-5 form-container" onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email Address"
        name="emailAddress"
        onChange={handleChange}
        value={formData.emailAddress}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Confirm Password"
        name="confirmPassword"
        onChange={handleChange}
        value={formData.confirmPassword}
      />

<label className="mb-3">
        <input
          type="checkbox"
          name="newsLetter"
          onChange={handleChange}
          checked={formData.newsLetter}
          className="me-2"
        />
        I want to join the newsletter
      </label>
      <button type="submit" className="btn btn-primary mt-3">Sign up</button>
    </form>
  );
}
