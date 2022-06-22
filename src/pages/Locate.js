import "../styles/locate.css"
export default function Locate() {
  return (
    <div className="locateContainer">
      <h1>Locate Us</h1>
      <div className="googleWalkthrough"></div>
      <div className="googleMaps"></div>
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
      <p>Check out Yelp or Facebook for most Recent Hours</p>
      <h2>Address</h2>
      <a>106 W Meeker Puyallup, WA 98371</a>
    </div>
  );
}
