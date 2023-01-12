import React from "react";
import { useState, useEffect } from 'react'
import { getAllBooks } from '../../Services/DashboardService'
import BookCard from "./bookCard";
//import SearchIcon from "./search.svg";
import "./app.css";

const API_URL = "http://localhost/api/user/bookIndex";
function Dashboard() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks().then((data) => {
            console.log(data.data);
            setBooks(data.data.data);
        });
    }, []);

    const redirect = () => {
        window.Location.href = "/applyBook"
    }
    return (
        <div className="app">
            <h1 className="heading">GET YOUR BOOK</h1>

            {books?.length > 0 ? (
                <div className="container" >
                    {books.map((book, index) => (
                        <BookCard book={book} key={index} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No results found</h2>
                </div>
            )}
        </div>
    );
};


export default Dashboard;;