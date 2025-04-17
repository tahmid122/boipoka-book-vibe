import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
import PagesToRead from "../pages/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    errorElement: <ErrorPage />,
    children: [
      { index: true, loader: () => fetch("/booksData.json"), Component: Home },
      {
        path: "bookDetails/:bookId",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "readList",
        loader: () => fetch("/booksData.json"),
        Component: ReadList,
      },
      {
        path: "pages-to-read",
        loader: () => fetch("/booksData.json"),
        Component: PagesToRead,
      },
    ],
  },
]);
