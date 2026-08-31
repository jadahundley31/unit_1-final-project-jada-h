import { useState, useEffect } from "react";
import "../pages/personality-quiz/personality-quiz.css";

const UserPersonal = () => {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        const storedBooks = localStorage.getItem("savedBooks");

        if(storedBooks !== null) {
            const newBookArray = JSON.parse(storedBooks);
            setSavedBooks(newBookArray);
        }
    }, []);
    console.log(savedBooks);
    return (
        <div className="user-personal-container">
            <h2 style={{fontFamily:'Average Sans'}}>My Saved Books</h2>
            <div className="book-container">
                {savedBooks.map((book) => {
                return (
                    <div key={book.id} className="book-card">
                        <img className="book-cover" src={book.cover} alt={book.title}/>
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                        <p>{book.summary}</p>
                    </div>
                );
            })}
            </div>
        </div>
    )
}
export default UserPersonal;