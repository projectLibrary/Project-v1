import React from "react";
import {useState, useEffect} from 'react'

import { getMyBook } from '../../Services/MyBookService'

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBTypography,
  MDBBtn

} from 'mdb-react-ui-kit';
import Books from "../Librarian/Books";

function BookHistory() {
  const [book, setHistory] = useState([]);
 useEffect(() => {
  getMyBook().then((data) => {
    console.log(data);
          setHistory(data.data.data);
      });
  }, []);
  const getRow = (book, index)=>{
    return (
        <tr key={index}>
            <td>{book.Book.bookname}</td>
            <td>{book.issuedDate}</td>
            <td>{book.expectedreturnDate}</td>
            <td>{book.returnDate}</td>
        </tr>

    )

}

  return (
    <>
     <div>
      <div class="table-responsive">
        <MDBTypography tag='h4' style={{ textAlign: "center", marginTop: "20px", marginLeft:"100px" }}>My Books history</MDBTypography>
        <MDBTable striped hover w-auto style={{ borderRadius: "7px", width: "800px", marginTop: "50px", marginLeft: "200px", boxShadow: '2px 2px 2px #9a9a9a' }}>

          <MDBTableHead>
                    <tr>
                      <th> Book Name</th>
                      <th>Issued Date</th>
                      <th>Expected returnDate</th>
                      <th>Return Date</th>
                
                    </tr>
                    </MDBTableHead>
          <MDBTableBody>

            {book.map(getRow)}


          </MDBTableBody>

        </MDBTable>
      </div>
    </div>
    </>
  );
}

export default BookHistory;
