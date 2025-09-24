import './NewBook.css';
import Modal from './Modal';
import ProductForm from './ProductForm';

function NewBook() {
  return (
    <div className="newButton">
      <Modal btnLabel="New" btnClassName="add-btn">
        <ProductForm />
      </Modal>
    </div>
  );
}

export default NewBook;
