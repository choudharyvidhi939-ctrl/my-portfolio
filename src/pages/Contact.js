// pages/Contact.js
import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <table border="1" cellPadding="10">
          <tbody>
            <tr>
              <td>Name:</td>
              <td><input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></td>
            </tr>
            <tr>
              <td>Message:</td>
              <td><textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required /></td>
            </tr>
            <tr>
              <td colSpan="2"><button type="submit">Send</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Contact;
