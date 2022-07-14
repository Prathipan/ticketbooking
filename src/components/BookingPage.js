import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ChairIcon from '@mui/icons-material/Chair';
import IconButton from '@mui/material/IconButton'

function BookingPage() {
    const seats = ["A","B","C","D","E","F","G",'H',"I","J"];
    const [clicked,setClicked] = useState("available");
    const handleClick = () => {
        setClicked(!clicked);
    }

  return (
    <Container className='container'>
        <div className='screen'>
           <img  src="https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg" alt="screen"/>
        </div>
        <div className='ticket-details'>
             <ul className='unorderedList'>
                <li>
                    <ChairIcon className='available' />
                    <small>Available</small>
                </li>
                <li>
                    <ChairIcon className='booked' />
                    <small>Booked</small>
                </li>
                <li>
                    <ChairIcon className='selected'/>
                    <small>Selected</small>
                </li>
             </ul>
        </div>
        <div className='board'>
        <IconButton onClick={handleClick}><ChairIcon className= {clicked ? "available" : "selected" } /></IconButton>
        </div>
    </Container>
  )
}

export default BookingPage