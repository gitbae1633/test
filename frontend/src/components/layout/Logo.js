import { Box, Typography } from '@mui/material';
import React from 'react';

const Logo = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Typography
                sx={{
                    fontSize: '28px',
                    color: '#117AEF',
                    fontFamily: 'Black Han Sans, sans-serif',
                    lineHeight: '90px',
                    fontWeight: 800,
                    pt: '5px',
                }}>
                SMART</Typography>
            <Typography
                sx={{
                    fontSize: '28px',
                    color: '#000',
                    fontFamily: 'Black Han Sans, sans-serif',
                    lineHeight: '90px',
                    fontWeight: 800,
                    pt: '5px',
                }}>LOGISTRICS</Typography>

        </Box>
    );
};

export default Logo;