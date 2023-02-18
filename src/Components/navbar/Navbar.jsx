import { Box } from '@mui/system'
import React, { useContext } from 'react'
import './navbar.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { User } from '../../hooks/context/Context';
import logo from '../../data/logo.jpg';


const Navbar = () => {
    const { setMovieName, movieName } = useContext(User)

    return (
        <Box className='navbar_container' sx={{ bgcolor: '#ECF2FF', width: '100%', color: 'black' }}>
            <Box className='left'><img src={logo} alt="" style={{ width: '50px', height: '50px' }} /></Box>
            <Box className='center' >Movie Time</Box>
            <Box className='right'>  <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Movies......"
                    inputProps={{ 'aria-label': 'search movies' }}
                    onChange={(e) => setMovieName(e.target.value)}
                />
                <IconButton sx={{ p: '10px' }} >
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            </Paper></Box>
        </Box>
    )
}

export default Navbar