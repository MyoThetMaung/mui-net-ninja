import { TextField,Radio,RadioGroup,Box, Button,FormControlLabel,FormLabel,FormControl } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme)=>{
  return {
    input : {
      width : '100%'
    }
  }
    
})
const Create = () => {
    const navigate = useNavigate()
    const [title,setTitle] = useState('')
    const [details,setdetails] = useState('')
    const [titleError,setTitleError] = useState(false)
    const [detailsError,setdetailsError] = useState(false)
    const [category,setCategory] = useState('')

    const classes = useStyles()
    const handleSubmit = (e) =>{
        setTitleError(false)
        setdetailsError(false)

        e.preventDefault()
        if(title === ''){
            setTitleError(true)
        }
        if(details === ''){
            setdetailsError(true)
        }
        if(title && details){
            fetch('http://localhost:8001/notes',{
              method : 'POST',
              headers : {
                'Content-Type' : 'application/json'
              },
              body : JSON.stringify({
                title,details,category
              })
            }).then(()=>navigate('/'))
        }
        console.log(category)
    }
    return (
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          required
          id="title"
          label="title"
          onChange={(e)=>setTitle(e.target.value)}
          error ={titleError}
          className = {classes.input}
        />
        <TextField
          required    
          id="details"
          label="details"
          onChange={(e)=>setdetails(e.target.value)}
          error ={detailsError}
          className = {classes.input}
        />

       <FormControl className = {classes.input}>
            <FormLabel id="demo-radio-buttons-group-label">Income</FormLabel>
            <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>  
                <FormControlLabel control={<Radio/>} label="money" value="money"/>
                <FormControlLabel control={<Radio/>} label="card" value="card"/>
                <FormControlLabel control={<Radio/>} label="wallet" value="wallet"/>
            </RadioGroup>
       </FormControl>

        <Button type="submit" variant="contained" onClick={()=>console.log('you clicked me')}>Submit</Button>
      </form>
    )
}

export default Create