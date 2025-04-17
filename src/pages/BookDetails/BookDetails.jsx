import React from "react";
import { useLoaderData, useParams } from "react-router";
import { setToLocalStorage } from "../../utilities/LocalStorage/localStorage";
import { setToLocalStorage2 } from "../../utilities/WishList/wishlist";
import { ToastContainer, toast } from "react-toastify";

const BookDetails = () => {
  const { bookId } = useParams();

  const books = useLoaderData();
  const singleBook = books.find((book) => book.bookId === Number(bookId));
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    totalPages,
    yearOfPublishing,
    tags,
  } = singleBook;
  return (
    <div className="p-10 ">
      <div className=" rounded-3xl py-20 flex items-start justify-between p-20 gap-12">
        <div className="w-[50%] bg-gray-100 rounded-2xl p-16">
          <img className="h-[560px] mx-auto" src={image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="font-bold text-4xl">{bookName}</h1>
          <p className="font-medium text-xl">By: {author}</p>
          <hr className="border opacity-60 border-slate-200" />
          <p className="font-medium text-xl">{category}</p>
          <hr className="border opacity-60 border-slate-200" />
          <p className="text-base opacity-70">
            <b>Review:</b> {review}
          </p>
          <div className="flex items-center gap-3 p-3 my-5">
            <h4 className="text-base font-bold">Tag</h4>
            <div>
              {tags.map((tag, index) => (
                <span
                  className="p-1 font-bold rounded px-2 text-xs mr-2 bg-green-100"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <hr className="border opacity-60 border-slate-200" />
          <table>
            <tbody>
              <tr>
                <td className="text-base">
                  Number of Pages:{" "}
                  <span className="font-semibold mr-5">{totalPages}</span>
                </td>
              </tr>
              <tr>
                <td className="text-base">
                  Publisher:{" "}
                  <span className="font-semibold mr-5">{publisher}</span>
                </td>
              </tr>
              <tr>
                <td className="text-base">
                  Year of Publishing:{" "}
                  <span className="font-semibold mr-5">{yearOfPublishing}</span>
                </td>
              </tr>
              <tr>
                <td className="text-base">
                  Rating: <span className="font-semibold mr-5">{rating}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center gap-5">
            <button
              onClick={() => {
                const func = setToLocalStorage(bookId);
                func === false ? "" : toast("Marked as Read");
              }}
              className="btn btn-outline"
            >
              Mark as Read
            </button>
            <button
              onClick={() => {
                const func = setToLocalStorage2(bookId);
                func === false ? "" : toast("Added to Wishlist");
              }}
              className="btn btn-primary"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
