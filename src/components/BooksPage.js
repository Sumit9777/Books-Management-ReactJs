// src/components/BooksPage.js
import React, { useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import books from '../data/books';
import '../styles/BooksPage.css';

const BooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { id } = useParams(); // Retrieve the book ID from the URL parameter
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const viewBook = (book) => {
    navigate(`/books/${book.id}`);
  };

  return (
    <div className="books-page">
      <h1>Books</h1>
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="book" key={book.id}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <Link to={`/books/${book.id}`}>
                <button>View</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
      {/* Display book details if ID is present in the URL */}
      {id && (
        <div className="book-details-page">
          <h2>Book Details</h2>
          {/* Fetch and display book details based on the ID */}
          {books.map((book) => {
            if (book.id === parseInt(id)) {
              return (
                <div key={book.id}>
                  <img src={book.image} alt={book.title} />
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <p>{book.description}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default BooksPage;
