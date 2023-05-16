import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({book}) => {
  console.log(book)
  const {authorname,bookname,description,img_url,pdf_url,publish_date,_id} = book;
  return (
    <div class="col">
      <div class="card h-100">
        <img
          src={img_url}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{bookname}</h5>
          <p class="card-text">
           {authorname}
          </p>
          <p class="card-text">
           {description}
          </p>
        </div>
        <div class="card-footer">
          <Link to={`details/${_id}`} className="text-decoration-none">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
