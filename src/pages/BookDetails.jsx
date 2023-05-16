import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const {id} = useParams()
  const [details,setDetails] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/book/${id}`)
    .then(res=> res.json())
    .then(data => {
      console.log(data)
      setDetails(data)
    })
  },[])


  return <div>
  <Card>
  <Card.Header as="h5">{details.bookname}</Card.Header>
  <Card.Body>
    <Card.Title>{details.authorname}</Card.Title>
    <img style={{height: '300px', width:'300px'}} src={details.img_url} alt="" />
    <Card.Text>
      {details.description}
    </Card.Text>

    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
 <iframe
 title="pdf file view"
 width='100%'
 height='600px'
 src={details?.pdf_url}
  />


</div>;
};

export default BookDetails;
