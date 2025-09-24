import './ProductForm.css';

function ProductForm() {
  return (
    <div className="form-container">
      <h2>Add Book</h2>
      <form>
        <div className="form-control">
          <label>Title</label>
          <input name="pr-name" type="text" placeholder="Book title..." />
        </div>
        <div className="form-control">
          <label>Author</label>
          <input name="pr-author" type="text" placeholder="Author" />
        </div>
        <div className="form-control">
          <label>Publisher</label>
          <input name="publisher" type="text" placeholder="Publisher" />
        </div>
        <div className="form-control">
          <label>Publication Year</label>
          <input name="pu-year" type="number" />
        </div>
        <div className="form-control">
          <label>Language</label>
          <input name="language" type="text" placeholder="Language" />
        </div>
        <div className="form-control">
          <label>Pages</label>
          <input name="pages" type="number" />
        </div>
        <button className="btn primary">Save</button>
      </form>
    </div>
  );
}

export default ProductForm;
