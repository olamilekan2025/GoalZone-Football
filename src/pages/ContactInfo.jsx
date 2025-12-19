import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Styling/Contact-info.css";

const ContactInfo = () => {
  return (
   <div class="contact-info">
  <h2>Contact Us</h2>
  {/* <!-- optional --> */}
  <p class="contact-info-text">We’re here for every fan, partner and future legend.</p>

  <div class="info-cards-container">
    <div class="info-card">
      <div class="info-icon"><FaLocationDot /></div>
      <div>
        <h4>Address</h4>
        <p>Legend Stadium, 25 Ayekale osogbo osun state</p>
      </div>
    </div>

    <div class="info-card">
      <div class="info-icon"><FaPhoneVolume /></div>
      <div>
        <h4>Phone</h4>
        <a href="tel:+1239129069652">+1239129069652</a>

      </div>
    </div>

    <div class="info-card">
      <div class="info-icon"><MdEmail /></div>
      <div>
        <h4>Email</h4>
        <a
  href="mailto:jelilioladunjoye04@gmail.com"
  className="email-link"
>
  jelilioladunjoye04@gmail.com
</a>
      </div>
    </div>
  </div>
</div>
  );
};

export default ContactInfo;
