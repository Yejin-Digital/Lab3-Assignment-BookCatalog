function BookListCard(props) {
  return (
    <div className="bookCard">
      <img src="/9781484212615.png" alt="Book cover" />
      <p className="bookAuthor">by</p>
      <p className="bookAuthor">{props.author}</p>
      <p className="bookAuthor"></p>
      <a className="learnMore">Learn more</a>
    </div>
  );
}

export default BookListCard;
