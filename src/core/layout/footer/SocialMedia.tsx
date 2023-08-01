import React from 'react'
import { Box, Stack } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import YouTubeIcon from '@mui/icons-material/YouTube'

const SocialMedia = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                py: 1,
            }}
        >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <FacebookIcon data-testid="facebook-icon" />
                <TwitterIcon data-testid="twitter-icon" />
                <InstagramIcon data-testid="instagram-icon" />
                <YouTubeIcon data-testid="you-tube-icon" />
                <WhatsAppIcon data-testid="whats-app-icon" />
                <LinkedInIcon data-testid="linked-in-icon" />
            </Stack>
        </Box>
    )
}

export default SocialMedia
