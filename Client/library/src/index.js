import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LibrarianApp from '../src/Components/Librarian/LibrarianApp';
import UserApp from '../src/Components/User/UserApp';
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
import Dashboard from './Components/User/Dashboard';
import BookDetails from './Components/User/BookDetails';
import UserProfile from './Components/User/UserProfile';
import FeedBack from './Components/User/Feedback';
import BookHistory from './Components/User/BookHistory';



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
  {
    path: "/user", element: <UserApp/>, children: [
      { path: "/user/bookIndex", element: <Dashboard/> },
      { path: "/user/applyBook/:id", element: <BookDetails/>},
      { path: "/user/profile", element: <UserProfile/>},
      { path: "/user/myBook", element: <BookHistory/>},
      { path: "/user/feedback", element: <FeedBack/>},
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

reportWebVitals();
