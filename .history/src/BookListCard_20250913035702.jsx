import './BookListCard.css';

function BookListCard(props) {
  return (
    <div className="bookCard">
      <div className="bookImage">
        <img src="/9781484212615.png" alt="Book cover" />
      </div>
      <div className="bookInfo">
        <p className="bookAuthor">by</p>
        <p className="bookAuthor">{props.author}</p>
        <p className="bookAuthor"></p>
        <a>Learn more</a>
      </div>
    </div>
  );
}

export default BookListCard;
