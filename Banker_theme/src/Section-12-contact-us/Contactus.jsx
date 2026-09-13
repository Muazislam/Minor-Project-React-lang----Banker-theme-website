import Button from "../Button/Button.jsx";

function Contactus() {
  return (
    <section className="contactus py-5">
      <style>{`\n        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');\n        .contactus {\n          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n          overflow-x: hidden;\n        }\n        .contactus h1, .contactus h2 {\n          font-weight: 800;\n          font-size: clamp(2rem, 5vw, 3rem);\n          color: #0f172a;\n          margin-bottom: 2rem;\n        }\n        .contactus .info-box {\n          text-align: left;\n          background: #fff;\n          border: 1px solid #e5e7eb;\n          border-radius: 0.75rem;\n          padding: 1.5rem;\n          box-shadow: 0 2px 6px rgba(0,0,0,0.04);\n        }\n        .contactus .info-box p {\n          margin: 0.5rem 0;\n          font-size: 0.95rem;\n          color: #475569;\n          word-break: break-word;\n          overflow-wrap: break-word;\n        }\n        .contactus form {\n          background: #fff;\n          border: 1px solid #e5e7eb;\n          border-radius: 0.75rem;\n          padding: 2rem;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.06);\n        }\n        .contactus label {\n          display: block;\n          margin-top: 1rem;\n          font-weight: 600;\n          font-size: 0.95rem;\n          color: #0f172a;\n        }\n        .contactus input, .contactus textarea {\n          width: 100%;\n          padding: 0.75rem;\n          margin-top: 0.25rem;\n          border: 1px solid #cbd5e1;\n          border-radius: 0.5rem;\n          font-size: 0.95rem;\n          font-family: inherit;\n        }\n        .contactus textarea { resize: vertical; min-height: 120px; }\n        .contactus button {\n          margin-top: 1.5rem;\n          width: 100%;\n          background: #0284c7;\n          color: #fff;\n          border: none;\n          padding: 0.75rem;\n          font-size: 1rem;\n          font-weight: 600;\n          border-radius: 0.5rem;\n          cursor: pointer;\n          transition: background 0.2s ease;\n        }\n        .contactus button:hover { background: #0369a1; }\n      `}</style>

      <div className="container px-3">
        <h1 className="text-center fw-bold mb-4">Contact Us</h1>
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-4">
            <div className="info-box">
              <p><strong>Address:</strong></p>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="info-box">
              <p><strong>Phone:</strong></p>
              <p>+1 232 3235 324</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="info-box">
              <p><strong>Email:</strong></p>
              <p>youremail@domain.com</p>
            </div>
          </div>
        </div>

        <form>
          <h2>Send us a message</h2>
          <label htmlFor="user-name">First Name</label>
          <input type="text" id="user-name" name="firstName" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="lastName" />

          <label htmlFor="mail">Email</label>
          <input type="email" id="mail" name="email" />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="message-box">Message</label>
          <textarea id="message-box" name="message" placeholder="Enter your notes or question here..." />

          <Button type="submit" />
        </form>
      </div>
    </section>
  );
}

export default Contactus;
