// src/components/SearchForm.jsx
export default function SearchForm() {
  return (
    <form className="search-form ms-4">
      <input type="text" placeholder="Search..." className="form-control" />
      <button type="submit" className="btn"><i className="bi bi-search"></i></button>
    </form>
  );
}
