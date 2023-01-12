import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book: { id, bookname, summary, availability } }) => {
  console.log('from book card');
  console.log(bookname)

  const redirect = () => {
    window.Location.href = "/applyBook"
  }
  return (
    <Link to={`/user/applyBook/${id}`}>
      <div className="movie" onClick={() => redirect()}>
        <div>
          <p>{availability}</p>
        </div>
        <div>
          <img src={"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/attachment_80004080-e1488217702832.jpg?auto=format&q=60&fit=max&w=930"} alt={bookname} />
        </div>
        <div>
          <h3>{bookname}</h3>
          <span>{summary}</span>
        </div>
      </div>
    </Link>
  );
}



export default BookCard;