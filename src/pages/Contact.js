import "../styles/contact.css";
export default function Contact() {
  return (
    <div>
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
  );
}
