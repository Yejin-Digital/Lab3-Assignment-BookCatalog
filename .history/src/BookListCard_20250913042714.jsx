import './BookListCard.css';

function BookListCard(props, image) {
  return (
    <div className="bookCard">
      <div className="bookImage">
        <img src={image} alt="Book cover" />
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
