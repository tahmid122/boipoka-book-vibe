import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBook from "./ReadBook";
import { getFromLocalStorage } from "../../utilities/LocalStorage/localStorage";
import { getFromLocalStorage2 } from "../../utilities/WishList/wishlist";
const ReadList = () => {
  const booksData = useLoaderData();
  const [readingBooks, setReadingBooks] = useState([]);
  const [wishlistBooks, setWishListBooks] = useState([]);
  useEffect(() => {
    const localLsId = getFromLocalStorage();

    const books = [];
    localLsId.map((id) => {
      const expectedData = booksData.find((book) => book.bookId === Number(id));
      books.push(expectedData);
    });
    setReadingBooks(books);
  }, []);
  useEffect(() => {
    const wishListData = getFromLocalStorage2();
    const wishbooks = [];
    wishListData.map((id) => {
      const expectedData = booksData.find((book) => book.bookId === Number(id));
      wishbooks.push(expectedData);
    });
    setWishListBooks(wishbooks);
  }, []);
  const handleChange = (e) => {
    const newRbooks = [...readingBooks];
    const wishList = [...wishlistBooks];
    const value = e.target.value;
    if (value === "page") {
      newRbooks.sort(function (a, b) {
        return a.totalPages - b.totalPages;
      });
      wishList.sort(function (a, b) {
        return a.totalPages - b.totalPages;
      });

      setReadingBooks(newRbooks);
      setWishListBooks(wishList);
    } else {
      newRbooks.sort(function (a, b) {
        return a.rating - b.rating;
      });
      wishList.sort(function (a, b) {
        return a.rating - b.rating;
      });
      setWishListBooks(newRbooks);
    }
  };

  return (
    <div className="p-10">
      <div className="flex items-center justify-center my-5 ">
        <select
          className="border border-slate-300 rounded py-2 px-4 outline-none text-base font-semibold"
          onChange={handleChange}
          name="dropdown"
          id=""
        >
          <option value="Sort By" selected disabled>
            Sort By
          </option>
          <option value="page">Page</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <span className="text-lg">Read Books</span>
          </Tab>
          <Tab>
            <span className="text-lg">Wishlist Books</span>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="space-x-6">
            {readingBooks.map((book) => (
              <ReadBook key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-x-6">
            {wishlistBooks.map((book) => (
              <ReadBook key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
