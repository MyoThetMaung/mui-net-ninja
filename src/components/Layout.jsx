import { makeStyles } from '@mui/styles'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar,Typography, List, ListItemText, ListSubheader, ListItemIcon, ListItem } from '@mui/material'  
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import {useNavigate,useLocation} from 'react-router-dom'
import {format} from 'date-fns'

const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    {console.log( theme.mixins.toolbar.minHeight)}
    return {
        page : {
            background : '#f9f9f9',
            width : '100%',
            padding : theme.spacing(3)
        },
        drawer : {
            width : drawerWidth
        },
        drawerPaper : {
            width : drawerWidth
        },
        root : {
            display : 'flex'
        },
        active : {
            background : "#f4f4f4"
        },
        title : {
            padding : theme.spacing(2)
        },
        appbar : {
            width  : `calc(100% - ${drawerWidth}px) !important`
        },
        toolbar : {
            height : theme.mixins.toolbar.minHeight
        },
        date : {
            flexGrow : 1
        },
        avatar : {
            marginLeft : theme.spacing(1.5)
        }
    }
})

const menuItems = [
    {
        text : 'My notes',
        icon : <SubjectOutlined color="secondary"/>,
        path : '/'
    },
    {
        text : 'Create Note',
        icon : <AddCircleOutlineOutlined color="secondary"/>,
        path : '/create'
    }
]

const Layout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const classes = useStyles()
    let aa = ''
    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                       Today date is { format(new Date(),'do MMMM Y')}
                    </Typography>
                    <Typography>
                       Saimon
                    </Typography>
                    <Avatar src="/newFile-2.avif" className={classes.avatar}/>
                </Toolbar>
            </AppBar>

            {/* side drawer */}
            <Drawer 
                className={classes.drawer} 
                anchor="left" 
                variant="permanent"
                classes={{paper : classes.drawerPaper}}
            >  
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item => (
                       <ListItem 
                            key={item.text} 
                            onClick={()=> navigate(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon >{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}></ListItemText>
                       </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout