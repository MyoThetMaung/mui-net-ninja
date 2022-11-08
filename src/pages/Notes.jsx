import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import NoteCard from '../components/NoteCard'
import { Link } from 'react-router-dom'
import {Button,Container} from '@mui/material'
import Masonry from 'react-masonry-css'


const Notes = () => {
  const [note,setNote] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8001/notes')
    .then(response => response.json())
    .then(data => setNote(data))
  },[])

  const deleteHandler = async(id) =>{
      await fetch('http://localhost:8001/notes/'+id,{
        method : 'DELETE'
      })
      const activeItems = note.filter(n => n.id != id)
      setNote(activeItems)
  }
  const breakPoint = {
    default : 3,
    1100: 3,
    700: 2,
    500: 1
  }
  return (
     <Container>
        <Masonry
            breakpointCols={breakPoint}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
          {note.map(n =>(
            <div item key={n.id}>
                <NoteCard note={n} deleteItem={deleteHandler}/>
            </div>
          ))}
        </Masonry>
        <Link to="/create"><Button style={{background : 'green', color: 'black'}}>Create</Button></Link>
     </Container>
  )
}

export default Notes