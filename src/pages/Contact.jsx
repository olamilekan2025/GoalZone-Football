import { useState } from "react";
import ContactInfo from "./ContactInfo";
import "./Styling/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon ⚽");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you – fans, partners, or future legends.</p>

          <span>FC LEGEND</span>

         
        </div>
      </section>
      <ContactInfo/>

      {/* CONTENT */}
      <section className="contact-section">
        <div className="contact-container">
          {/* MAP */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126489.76291443923!2d4.469413217958166!3d7.810446722218068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s25%20ayekale%20ota%20efun%20osogbo%20osun%20state!5e0!3m2!1sen!2sng!4v1766173909284!5m2!1sen!2sng"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="FC Legend Location"
            ></iframe>
          </div>

          {/* FORM */}
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
              <textarea name="message" rows="6" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
              <button className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
