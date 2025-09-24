function BookListCard(props) {
  return (
    <div className="bookCard">
      <img src="/9781484212615.png" alt="Book cover" />
      <p className="bookAuthor">{props.author}</p>
      <a className="learnMore">Learn more</a>
    </div>
  );
}

export default BookListCard;
