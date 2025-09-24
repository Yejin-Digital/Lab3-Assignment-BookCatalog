import './NewBook.css';
import Modal from './Modal';

function NewBook() {
  return (
    <div className="newButton">
      <Modal btnLabel="New" btnClassName="add-btn"></Modal>
    </div>
  );
}

export default NewBook;
