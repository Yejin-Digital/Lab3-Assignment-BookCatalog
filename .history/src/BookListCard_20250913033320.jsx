import Image from '.public/9781484212615.png';

function BookListCard(props) {
  return (
    <div className="bookCard">
      <Image></Image>
      <p className="bookAuthor">{props.author}</p>
      <a className="learnMore">Learn more</a>
    </div>
  );
}

export default BookListCard;
