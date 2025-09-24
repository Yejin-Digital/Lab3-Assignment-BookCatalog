function BookListCard(props) {
  return (
    <div className="bookCard">
      <div className="bookImage"></div>
      <p className="bookAuthor">{props.author}</p>
      <a className="learnMore">Learn more</a>
    </div>
  );
}

export default BookListCard;
