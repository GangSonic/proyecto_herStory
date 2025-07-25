'use client';

export default function ContactForm() {
  return (
    <div className="form-wrapper">
      <form className="php-email-form">
        <div className="row">
          <div className="col-md-6 form-group">
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person"></i></span>
              <input type="text" className="form-control" placeholder="Your name*" required />
            </div>
          </div>
          <div className="col-md-6 form-group">
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-envelope"></i></span>
              <input type="email" className="form-control" placeholder="Email address*" required />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6 form-group">
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-phone"></i></span>
              <input type="text" className="form-control" placeholder="Phone number*" required />
            </div>
          </div>
          <div className="col-md-6 form-group">
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-list"></i></span>
              <select className="form-control" required>
                <option value="">Select service*</option>
                <option value="Service 1">Consulting</option>
                <option value="Service 2">Development</option>
                <option value="Service 3">Marketing</option>
                <option value="Service 4">Support</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-3">
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-chat-dots"></i></span>
              <textarea className="form-control" rows="6" placeholder="Write a message*" required></textarea>
            </div>
          </div>
          <div className="text-center mt-3">
            <button type="submit">Submit Message</button>
          </div>
        </div>
      </form>
    </div>
  );
}
