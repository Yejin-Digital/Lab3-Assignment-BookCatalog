import './BookListCard.css';

function BookListCard(props) {
  return (
    <div className="bookCard">
      <div className="bookImage">
        <img src={props.image} alt="Book cover" />
      </div>
      <div className="bookInfo">
        <div>
          {' '}
          <p className="bookAuthor">by</p>
          <p className="bookAuthor">{props.author}</p>
        </div>
        <a href={props.link}>Learn more</a>
      </div>
    </div>
  );
}

export default BookListCard;
