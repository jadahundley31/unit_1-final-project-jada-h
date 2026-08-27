import { useState, useEffect } from "react";
import "./quiz.css";

const Recommendations = ({ personality }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/mock-data/recommendedBooks.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load file");
        }
        return response.json();
      })
      .then((jsonData) => {
        setBooks(jsonData);
      })
      .catch((error) => {
        console.log("Error loading data:", error);
      });
  }, []);

  const matchingBooks = books.filter((book) => {
    if (book.category === personality) {
      return true;
    }
  });

  const handleSaveBook = (book) => {
    const storedBooks = localStorage.getItem("savedBooks");
    let usersBookList = [];

    if (storedBooks !== null) {
        usersBookList = JSON.parse(storedBooks); //turning storedBooks back into an array.
    }

    const bookAlreadySaved = usersBookList.some((savedBook) => {
        return savedBook.id === book.id;
    });

    if (bookAlreadySaved === false) {
        usersBookList.push(book);
        localStorage.setItem("savedBooks", JSON.stringify(usersBookList));
    }
  };

  return (
    <div>
      <h2>Recommended Books</h2>
      <div className="book-container">
        {matchingBooks.map((book) => {
          return (
            <div key={book.id} className="book-card">
              <img className="book-cover" src={book.cover} alt={book.title} />

              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
              <p>{book.summary}</p>

              <button onClick={() => handleSaveBook(book)}>
                Save to My List
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
