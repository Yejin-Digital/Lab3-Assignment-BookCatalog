import './BookListCard.css';

function BookListCard(props) {
  return (
    <div className="bookCard" id="myBook">
      <button className="btn-remove" id="removeCardBtn">
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

const removeCardBtn = document.getElementById('removeCardBtn');
const myBook = document.getElementById('myBook');

export default BookListCard;
