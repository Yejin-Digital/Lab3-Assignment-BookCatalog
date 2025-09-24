function BookListCard(props) {
  return (
    <div className="bookCard">
      <div className="bookImage"></div>
      <div className="bookAuthor">{props.author}</div>
      <a className="learnMore">Learn more</a>
    </div>
  );
}

export default BookListCard;
