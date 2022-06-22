import "../styles/contact.css";
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
          <h1 className="contactTitle">Or...</h1>
          <h3> You can click these links here</h3>
          <a href="mailto:evergreenbodymod@gmail.com">Email</a>
          <a href="tel:253-256-7912">Phone</a>
        </div>
      </div>
      {/* where the google walkthrough are  */}
      <div className="googleWalkthoughBox">
        <div className="socailLinksBox">
          <h1>Check Us Out On</h1>
          <a>Facebook</a>
          <a>Instagram</a>
        </div>
        <div className="googleWalkthrough">
          {/* where the googlemaps area will be */}
        </div>
      </div>
      {/* where the google Maps are  */}
      <div className="googleMapsBox">
        <div className="googleMaps">{/* where the google map lies */}</div>
        <div className="addressBox">
          <h1>Adress</h1>
          {/* get the link to here */}
          <a>106 W Meeker Puyallup, WA, 98371</a>
        </div>
        <div className="hoursOpen">
          <ul>
            <h3>HOURS</h3>
            <div>
              <p>Sunday</p>
              <p>10AM - 6PM</p>
            </div>
            <div>
              <p>Monday</p>
              <p>CLOSED</p>
            </div>
            <div>
              <p>Tuesday</p>
              <p>10AM - 6PM</p>
            </div>
            <div>
              <p>Wednesday</p>
              <p>10AM - 6PM</p>
            </div>
            <div>
              <p>Thursday</p>
              <p>10AM - 6PM</p>
            </div>
            <div>
              <p>Friday</p>
              <p>CLOSED</p>
            </div>
            <div>
              <p>Saturday</p>
              <p>10AM - 6PM</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
