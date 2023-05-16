import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBookTable = () => {
  
const [allBooks,setAllBooks] = useState([])
useEffect(()=>{
  fetch(`http://localhost:5000/all-book`)
  .then(res=> res.json())
  .then(data => setAllBooks(data))
},[])

const handleDelete = id =>{
  fetch(`http://localhost:5000/book/${id}`,{
    method: 'DELETE',

  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
}



  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Category Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
         {
          allBooks.map((book,i) => 
            <tr key={book._id}>
            <th scope="row">{i}</th>
            <th scope="row">{book.bookname}</th>
            <td>{book.authorname}</td>
            <td>{book.publish_date}</td>
            <td>
              <button onClick={()=>handleDelete(book._id)}>Delete</button>
              <Link to={`/admin/dashboard/edit-books/${book._id}`}><button>Update</button></Link>
            </td>
          </tr>
            )
         }
         
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookTable;
