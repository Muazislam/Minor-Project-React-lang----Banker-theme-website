import Button from "../Button/Button.jsx";

function Contactus() {
  
  return (
    <section className="contactus">
      <h1>Contact us</h1>

      <div className="grid text-center" style={{ "--bs-gap": "5rem" }}>
        <div className="g-col-4">
          <p>icon</p>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
        </div>
        <div className="g-col-4">
          <p>icon</p>
          <p>+1 232 3235 324</p>
        </div>
        <div className="g-col-4">
          <p>icon</p>
          <p>youremail@domain.com</p>
        </div>
      </div>

      <form>
        <h2>Contact us</h2>
        {/* First name */}
        <label htmlfor="user-name">First Name</label>
        <input type="text" id="user-name" name="name" />
        {/* last name */}
        <label htmlfor="last-name">Last Name</label>
        <input type="text" id="last-name" name="last name" />
        {/* email */}
        <label htmlfor="mail">Email</label>
        <input type="email" id="mail" name="mail" />
        {/* Subject of discussion */}
        <label htmlfor="subject">Subject</label>
        <input type="text" id="subject" name="subject" />
        {/*} Message box */}
        <label htmlfor="message-box">Message</label>
        <textarea
          id="message-box"
          placeholder="Enter your notes or question here..."
          name="text"
        />

        {/* Form submission button */}
        <Button type="submit" />
      </form>
    </section>
  );
}

export default Contactus;
