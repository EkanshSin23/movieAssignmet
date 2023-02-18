import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/footer/Footer'


const MovieDetails = () => {

    const { id } = useParams()

    const [movieDetials, setMovieDetails] = useState('')
    const fetchDetails = async () => {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab1986954eddfe42ea866c5be56aa128&language=en-US`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            }
        }
        )
        const responseJson = await response.json();
        setMovieDetails(responseJson)
    }
    useEffect(() => {
        fetchDetails()
    }, [])


    return (<Box p={0} sx={{ width: '100%', height: '100%' }}>
        <img src={`https://image.tmdb.org/t/p/original/${movieDetials?.poster_path}`} style={{ width: '100%', height: '99vh', opacity: '0.2', position: 'fixed', zIndex: 1 }} alt="" />
        <Stack sx={{ width: '100%', height: '100%', position: 'absolute', marginTop: '20%' }}>
            <Typography ml={5} sx={{ fontSize: '40px', width: '50%', fontWeight: '700', color: 'white' }}>{movieDetials?.title}</Typography>
            <Typography ml={5} sx={{ fontSize: '20px', width: '80%', color: 'white' }}>{movieDetials?.overview}</Typography>

            <Stack ml={5} mt={4} direction='row' spacing={3} sx={{}}>
                <Typography p={1} sx={{ width: '150px', textAlign: 'center', borderRadius: '15px', fontSize: '20px', color: 'white', textTransform: 'capitalize' }}>Genre :</Typography>
                {movieDetials?.genres?.map((item, index) => <Typography p={1} sx={{ cursor: 'pointer', bgcolor: 'gray', width: '150px', textAlign: 'center', borderRadius: '15px', fontSize: '20px', color: 'white', textTransform: 'capitalize' }}>{item?.name}</Typography>)}

            </Stack>
            <Stack ml={5} mt={4} direction='row' spacing={3} sx={{}}>

                <Typography p={1} sx={{ cursor: 'pointer', bgcolor: 'gray', width: '150px', textAlign: 'center', borderRadius: '15px', fontSize: '20px', color: 'white', textTransform: 'capitalize' }}>Language :{movieDetials?.original_language}</Typography>
                <Typography p={1} sx={{ cursor: 'pointer', bgcolor: 'gray', width: '150px', textAlign: 'center', borderRadius: '15px', fontSize: '20px', color: 'white', textTransform: 'capitalize' }}>Rating :{movieDetials?.popularity}</Typography>
                <Typography p={1} sx={{ cursor: 'pointer', bgcolor: 'gray', width: '150px', textAlign: 'center', borderRadius: '15px', fontSize: '20px', color: 'white', textTransform: 'capitalize' }}>{movieDetials?.status}</Typography>
                {movieDetials?.adult && <Typography p={1} sx={{ cursor: 'pointer', bgcolor: 'gray', width: '150px', textAlign: 'center', borderRadius: '15px', fontSize: '20px', color: 'white', textTransform: 'capitalize' }}>{movieDetials?.adult ? '18+' : ''}</Typography>}

            </Stack>




        </Stack>
        <Footer />
    </Box>
    )
}

export default MovieDetails