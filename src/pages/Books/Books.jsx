import Book from "../Book/Book";
import { useLoaderData } from "react-router";

const Books = () => {
  const bookData = useLoaderData();

  //   const [allBooks, setAllBooks] = useState([]);
  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => setAllBooks(data));
  //   }, []);
  //   const bookPromise = fetch("booksData.json").then((res) => res.json());
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-4xl font-bold py-9 mt-10">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookData &&
          bookData.map((book) => <Book key={book.bookId} book={book} />)}
      </div>
    </div>
  );
};

export default Books;
