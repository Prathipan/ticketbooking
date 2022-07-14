import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Movies({name,poster}) {

  let navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    navigate("/booking")
  }
  return (
     <Card style={{ width: '20rem' }}>
      <Card.Img className='poster' variant="top" src={poster} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="danger" onClick={handleClick}>Book now</Button>
      </Card.Body>
    </Card>
  )
}

export default Movies