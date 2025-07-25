export default function ContactHeader() {
  return (
    <div className="page-title">
      <div className="breadcrumbs">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#"><i className="bi bi-house"></i> Home</a></li>
            <li className="breadcrumb-item"><a href="#">Category</a></li>
            <li className="breadcrumb-item active current">Contact</li>
          </ol>
        </nav>
      </div>

      <div className="title-wrapper">
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </div>
  );
}
