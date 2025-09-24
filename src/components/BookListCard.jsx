import './BookListCard.css';

function BookListCard(props) {
  const handleRemove = (e) => {
    e.target.closest('.bookCard').remove();
  };

  return (
    <div className="bookCard" id="myBook">
      <button className="btn-remove" id="removeCardBtn" onClick={handleRemove}>
        Remove
      </button>
      <div className="bookImage">
        <img src={props.image} alt="Book cover" />
      </div>
      <div className="bookInfo">
        <div className="bookAuthorContainer">
          <p className="bookPrice">{props.price}</p>
        </div>
        <a href={props.url}>Learn more</a>
      </div>
    </div>
  );
}

export default BookListCard;
