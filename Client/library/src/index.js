import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LibrarianApp from '../src/Components/Librarian/LibrarianApp';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Books from './Components/Librarian/Books';
import AddBook from './Components/Librarian/AddBook';
import Users from './Components/Librarian/Userlist';
import Issued from './Components/Librarian/Issued';
import ViewFeedback from './Components/Librarian/ViewFeedback';
import CurrentIssued from './Components/Librarian/CurrentIssued';
import Return from './Components/Librarian/Return';
import Latefee from './Components/Librarian/Latefee';
import Login from './Components/Public/login/login';
import Register from './Components/Public/register/register';


const router = createBrowserRouter([
  { path: "/", element: <Login/>, children: [ 
  ]},
  {
    path: '/librarian', element: <LibrarianApp/>, children: [
      { path: '/librarian/users', element: <Users/> },
      { path: "/librarian/bookIndex", element: <Books/>},
      { path: "/librarian/addBook", element: <AddBook/>},
      { path: "/librarian/issuedbooks", element: <Issued/>},
      { path: "/librarian/currentIssued", element: <CurrentIssued/>},
      { path: "/librarian/feedback", element: <ViewFeedback/>},
      { path: "/librarian/returnBook/:id", element: <Return/>},
      { path: "/librarian/lateFee/:id", element: <Latefee/>},
      
    ]
  },
  {path: '/login', element: <Login/>},
  {path: '/register', element: <Register/>},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
