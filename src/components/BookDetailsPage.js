// src/components/BookDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to retrieve URL parameters
import books from '../data/books';
import '../styles/BookDetailsPage.css';

const BookDetailsPage = () => {
  const { id } = useParams(); // Retrieve the book ID from the URL parameter
  const book = books.find((book) => book.id === parseInt(id, 10)); // Find the book object based on the ID

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="book-details-page">
      <img src={book.image} alt={book.title} className="book-image" />
      <div className="book-details">
        <h1>{book.title}</h1>
        <p>{book.description}</p>
        <p><strong>Author:</strong> {book.author}</p>
        <div className="book-actions">
          <button className="download-button">Download E-book</button>
          <button className="ticket-button">Raise a Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
