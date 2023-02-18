import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { User } from '../../hooks/context/Context';
import ClipLoader from "react-spinners/ClipLoader";
import { Stack } from '@mui/material';
import search from '../../data/search.png'


import {
    useNavigate
} from 'react-router-dom';
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "gray",
    border: '5px solid gray',
    height: '100px', width: '100px'
};
const MoviesList = () => {
    const [loading, setLoading] = useState(false)
    let [color, setColor] = useState("gray");
    const navigate = useNavigate()
    const { movieName } = useContext(User)
    const [movieList, setMovieList] = useState('')


    //Fetching All Movies
    const fetchDetails = async () => {
        setLoading(true)
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab1986954eddfe42ea866c5be56aa128&query=${movieName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            }
        }
        )
        const responseJson = await response.json();
        setMovieList(responseJson.results)
        setTimeout(() => {
            setLoading(false)
        }, 500)


    }
    useEffect(() => {
        fetchDetails()
    }, [movieName])

    return (<>

        {loading ? <Stack justifyContent='center' alignItems='center' sx={{ height: '90vh', width: '100%' }}><ClipLoader
            color={color}
            loading={true}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
            <Typography sx={{ color: 'gray', fontSize: '30px' }}>Searching...</Typography>
        </Stack> : (<Box sx={{ flexGrow: 1, height: '85vh', overflowY: 'scroll' }}>
            <Grid container mt={5}>
                {movieList.length > 0 ? movieList?.map(item => <Grid xs={6} md={3} mb={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card sx={{ maxWidth: 345, minWidth: 345, maxHeight: 420, minHeight: 420, bgcolor: '#ECF2FF' }}>

                        <img src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} style={{ width: '100%', height: '180px' }} alt="" />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="div" color='#301E67' sx={{ height: '60px', fontWeight: '700', overflowY: 'hidden' }}>
                                {item?.title}
                            </Typography>
                            <Typography variant="body2" color="#301E67" sx={{ height: '80px', overflowY: 'hidden' }}>
                                {item?.overview}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ bgcolor: '#18122B', color: 'white' }} onClick={() => navigate(`/movieDetials/${item?.id}`)}>View More</Button>
                        </CardActions>
                    </Card>
                </Grid>) : (<Stack alignItems='center' spacing={5} justifyContent='center' sx={{ width: '100%' }}> <p style={{ color: 'gray', fontWeight: '700', fontSize: '40px', textAlign: 'center', width: '100%' }}>Search For A Valid Movie</p>
                    <img src={search} alt="" style={{ height: '200px', width: '300px' }} /></Stack>)}




            </Grid>
        </Box>)}
    </>
    )
}

export default MoviesList