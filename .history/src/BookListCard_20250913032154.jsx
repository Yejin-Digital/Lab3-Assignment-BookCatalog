function BookListCard(props) {
  return (
    <div className="bookCard">
      <div className="bookImage"></div>
      <div className="bookAuthor">{props.author}</div>
      <div className="learnMore">Learn more</div>
    </div>
  );
}

export default BookListCard;
