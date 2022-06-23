import "../styles/contact.css";
import React from "react";

export default function Contact() {
  return (
    <div>
      {/* contact form an contact links */}
      <div className="contactBox">
        {/* contact container */}
        <div className="contactContainer">
          {/* form for the contact box */}
          <h1 className="contactTitle">Reach out</h1>
          <form className="contactForm">
            <input
              name="name"
              type="text"
              placeholder="Your Name Here"
              id="nameInput"
              className="contactName contactInputs"
              required
            ></input>
            <input
              name="email"
              type="text"
              placeholder="Your Email Here"
              id="emailInput"
              className="contactEmail contactInputs"
              required
            ></input>
            <select
              name="subject"
              placeholder="Subject line"
              id="subject_input"
              className="contactOptions contactInputs"
              required
            >
              <option disabled hidden selected>
                Subject line
              </option>
              <option>Booking Appointment</option>
              <option>Changing Appointment</option>
              <option>Consult</option>
              <option>Question</option>
              <option>Other</option>
            </select>
            <textarea
              name="message"
              placeholder="I'd like to chat about"
              id="message_input"
              cols="30"
              rows="5"
              className="contactText contactInputs"
              required
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              id="form_button"
              className="submitBTN contactInputs"
            />
          </form>
        </div>
        {/* direct links to email and phone */}
        <div className="orLinks">
          <h1 className="contactDirectTitle">Or...</h1>
          <h3 className="contactSubText"> Contact Us Directly </h3>
          <a
            className="contactLinks hoverUnderlineAnimate"
            href="mailTo:evergreenbodymod@gmail.com"
          >
            Email: evergreenbodymod@gmail.com
          </a>
          <a
            className="contactLinks hoverUnderlineAnimate"
            href="tel:253-256-7912"
          >
            Phone: 253-256-7912
          </a>
        </div>
      </div>
      {/* where the google walkthrough are  */}
      <div className="googleWalkthoughBox">
        <div className="socialLinksBox">
          <h1>Check Us Out On</h1>
          <a
            className="contactLinks hoverUnderlineAnimate"
            href="https://m.facebook.com/Evergreen-Body-Mod-110421318127572/?ref=py_c"
            rel="noreferrer"
            target={"_blank"}
          >
            Facebook: Evergreen Body Mod
          </a>
          <a
            className="contactLinks hoverUnderlineAnimate"
            href="https://www.instagram.com/mattjolly13/?hl=en"
            rel="noreferrer"
            target={"_blank"}
          >
            Instagram: @mattjolly13
          </a>
        </div>
        <div className="googleWalkthrough">
          {/* where the googlemaps area will be */}
          {/* <div data-mc-src="1591cebc-8b46-49d7-8e50-c29a129c7044#instagram"></div>

          <script
            src="https://cdn2.woxo.tech/a.js#62b2bef6e9cfc2002fc7bbd3"
            async
            data-usrc
          ></script> */}
        </div>
      </div>
      {/* where the google Maps are  */}
      <div className="googleMapsBox">
        <div className="googleMaps">
          {/* where the google map lies */}
          <iframe
            title="googleMaps"
            width="220%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Evergreen%20Body%20Mod&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
        <div className="googleMapsTextBox">
          <div className="addressBox">
            <h1 className="gridContainer">Address</h1>
            {/* get the link to here */}
            <a
              className="contactLinks hoverUnderlineAnimate"
              href="https://www.google.com/maps/place/Evergreen+Body+Mod/@47.1908985,-122.2963096,17z/data=!3m1!4b1!4m5!3m4!1s0x5490ffa8b52de03b:0x978a7663f745c8b7!8m2!3d47.1908949!4d-122.2941209"
              rel="noreferrer"
              target={"_blank"}
            >
              106 W Meeker Puyallup, WA, 98371
            </a>
          </div>
          <div className="hoursOpen">
            <ul className="gridUl">
              <h1 className="gridContainer">Hours</h1>
              <div className="gridItem">
                <p className="hourInfoL">Sunday</p>
                <p className="hourInfoR">10AM - 6PM</p>
              </div>
              <div className="gridItem">
                <p className="hourInfoL">Monday</p>
                <p className="hourInfoR">CLOSED</p>
              </div>
              <div className="gridItem">
                <p className="hourInfoL">Tuesday</p>
                <p className="hourInfoR">10AM - 6PM</p>
              </div>
              <div className="gridItem">
                <p className="hourInfoL">Wednesday</p>
                <p className="hourInfoR">10AM - 6PM</p>
              </div>
              <div className="gridItem">
                <p className="hourInfoL">Thursday</p>
                <p className="hourInfoR">10AM - 6PM</p>
              </div>
              <div className="gridItem">
                <p className="hourInfoL">Friday</p>
                <p className="hourInfoR">CLOSED</p>
              </div>
              <div className="gridItem">
                <p className="hourInfoL">Saturday</p>
                <p className="hourInfoR">10AM - 6PM</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
