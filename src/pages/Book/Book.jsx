import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    author,
    bookId,
    bookName,
    category,
    image,
    // publisher,
    rating,
    // review,
    // totalPages,
    yearOfPublishing,
    tags,
  } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 rounded-2xl  shadow-sm p-6 border border-slate-200">
        <figure className="bg-gray-100 rounded-2xl p-8">
          <img
            className="rounded-2xl h-[166px] object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-0 mt-5">
          <div className="mb-5">
            {tags.map((tag, index) => (
              <span
                className="p-1 font-bold rounded px-2 text-xs mr-2 bg-green-100"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="card-title text-2xl font-bold">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p className="font-medium text-base">By: {author}</p>
          <hr className="border-dashed opacity-30" />
          <div>
            <div className="flex gap-2 items-center justify-between">
              <div className="font-medium text-base">{category}</div>
              <div className="font-medium text-base flex items-center justify-center gap-1">
                {rating} <Star size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
