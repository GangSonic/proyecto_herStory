export default function ContactInfo() {
  return (
    <div className="row gy-4 mb-5">
      <div className="col-lg-4">
        <div className="info-card">
          <div className="icon-box"><i className="bi bi-geo-alt"></i></div>
          <h3>Our Address</h3>
          <p>2847 Rainbow Road, Springfield, IL 62701, USA</p>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="info-card">
          <div className="icon-box"><i className="bi bi-telephone"></i></div>
          <h3>Contact Number</h3>
          <p>Mobile: +1 (555) 123-4567<br />Email: info@example.com</p>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="info-card">
          <div className="icon-box"><i className="bi bi-clock"></i></div>
          <h3>Opening Hour</h3>
          <p>Monday - Saturday: 9:00 - 18:00<br />Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}
