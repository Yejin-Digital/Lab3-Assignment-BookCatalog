import './BookListCard.css';
import { RemoveButton } from './RemoveButton';

const removeCard = document.getElementById('removeCard');
const myBook = document.getElementById('myBook');

removeCard.addEventListener('click', function () {
  myBook.parentNode.removeChild(myBook);
});

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
