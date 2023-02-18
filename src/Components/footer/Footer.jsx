import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system'

const Footer = () => {
    return (
        <Box mt={2} sx={{ bgcolor: '#ECF2FF', width: '100%', position: 'fixed', bottom: 0, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ textAlign: 'center', color: 'black', fontWeight: '700' }}>
                All Rights Reserved @2023
            </Typography>

        </Box>
    )
}

export default Footer