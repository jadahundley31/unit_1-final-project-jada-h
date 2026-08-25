import { useState, useEffect } from "react";

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
  console.log(books);
  return (
    <div>
        <h2>Recommended Books</h2>
    </div>
  );
}

export default Recommendations;