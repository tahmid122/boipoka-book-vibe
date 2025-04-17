import React from "react";
import bookImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="flex items-center justify-around bg-gray-100 rounded-3xl py-20">
      <div className="space-y-8">
        <h1 className="font-bold text-5xl">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="btn btn-primary">View The List</button>
      </div>
      <div>
        <img className="h-[395px] w-[300px]" src={bookImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
