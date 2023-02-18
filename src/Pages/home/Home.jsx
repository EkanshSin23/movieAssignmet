import { Box, Stack } from '@mui/material'
import React, { Suspense, lazy, useEffect, useState } from 'react'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import ClipLoader from "react-spinners/ClipLoader";
const LazyMoviesList = lazy(() => import('../../Components/movielist/MoviesList'))


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "gray",
    border: '5px solid gray',
    height: '100px', width: '100px'
};
const Home = () => {
    const [loading, setLoading] = useState(false)
    let [color, setColor] = useState("gray");
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 1500);
    }, [])
    return (<>
        {!loading ? <Stack justifyContent='center' alignItems='center' sx={{ height: '100vh', width: '100%' }}><ClipLoader
            color={color}
            loading={true}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        /></Stack> : (<Box p={0} sx={{ width: '100%', height: '100%' }}>
            <Navbar />
            <Suspense fallback={<p>Loading....... Please Wait</p>}> <LazyMoviesList /></Suspense>
            <Footer />
        </Box>)}
    </>
    )
}

export default Home