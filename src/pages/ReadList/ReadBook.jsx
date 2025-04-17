import { BookOpenText, MapPin, UsersRound } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ReadBook = ({ book }) => {
  const {
    author,
    bookId,
    bookName,
    category,
    image,
    publisher,
    rating,
    totalPages,
    yearOfPublishing,
    tags,
  } = book;
  return (
    <div className="flex md:flex-row flex-col gap-6 my-6 p-6  border border-slate-200 rounded-2xl">
      <div className="bg-gray-100 py-7 px-12 rounded-2xl w-full md:w-[230px]">
        <img className="h-[172px] mx-auto" src={image} alt="" />
      </div>
      <div className="flex flex-col justify-around w-full space-y-2 md:space-y-0">
        <h3 className="text-2xl font-bold">{bookName}</h3>
        <p className="text-base font-medium flex items-center gap-1">
          By: {author}
        </p>
        <div className="flex items-start justify-start gap-3">
          <h4 className="text-base font-bold">Tag</h4>
          <div className="flex items-center md:flex-nowrap flex-wrap md:space-y-0 space-y-2">
            {tags.map((tag, index) => (
              <span
                className="p-1 font-bold rounded px-2 text-xs mr-2 bg-green-100"
                key={index}
              >
                {tag}
              </span>
            ))}
            <span className="text-base opacity-80 flex items-center gap-1">
              <MapPin size={16} /> Year of Publishing {yearOfPublishing}
            </span>
          </div>
        </div>
        <div className="text-base opacity-60 flex items-center gap-4">
          <span className="flex items-center gap-1">
            <UsersRound size={16} />
            Publisher: {publisher}
          </span>
          <span className="flex items-center gap-1">
            <BookOpenText size={16} />
            Page: {totalPages}
          </span>
        </div>
        <hr className="border-slate-200" />
        <div className="text-base flex items-center md:flex-nowrap flex-wrap md:gap-4 gap-2">
          <button className="btn btn-primary  rounded-full outline-none border-none">
            Category: {category}
          </button>
          <button className="btn btn-success  rounded-full outline-none border-none">
            Rating: {rating}
          </button>
          <Link
            to={`/bookDetails/${bookId}`}
            className="btn btn-info  rounded-full outline-none border-none"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
