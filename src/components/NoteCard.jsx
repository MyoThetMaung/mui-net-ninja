import React from 'react'
import { Card, IconButton, Typography, Avatar } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { DeleteOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    test : {
        border : function(note){
            if(note.category == 'work'){
                return '1px solid red'
            }
        }
    }
})
const NoteCard = ({note,deleteItem}) => {
    const classes = useStyles(note)
    return (
        <Card elevation={1} className={classes.test}>
            <CardHeader 
                avatar ={
                    <Avatar style={{background : '#ff3d00'}}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={          
                    <IconButton onClick={()=>deleteItem(note.id)}>
                        <DeleteOutlined/>
                    </IconButton>
                }
                title ={note.title}
                subheader = {note.category}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NoteCard