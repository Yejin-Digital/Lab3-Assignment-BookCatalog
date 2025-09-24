import './BookListCard.css';

export function RemoveButton() {
  return (
    <div className="btn-remove" onClick={remove}>
      <span>Remove</span>
    </div>
  );
}

function BookListCard(props) {
  return (
    <div className="bookCard">
      <RemoveButton id="removeCard" />
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
