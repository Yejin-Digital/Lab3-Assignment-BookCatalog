function BookListCard(props) {
  return (
    <div className="bookCard">
      <div className="bookImage"></div>
      <div className="bookAuthor">
        <p>{props.author}</p>
      </div>
      <div className="learnMore">
        <p>Learn more</p>
      </div>
    </div>
  );
}

export default BookListCard;
