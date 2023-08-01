import React from 'react'
import { Button, TextField, Typography } from '@mui/material'

import { H3 } from '@/components/data-display'

const Newsletter = () => {
    return (
        <React.Fragment>
            <H3 data-testid="newsletter-title">Newsletter</H3>
            <Typography
                data-testid="newsletter-description"
                variant="body2"
                paragraph
            >
                Subscribe to our newsletter and stay in the know about the
                enchanting world of travel! Get the latest updates, destination
                guides and insider tips. Bon voyage!
            </Typography>
            <TextField
                id="email-address"
                data-testid="email-address"
                label="Email address"
                size={'small'}
                variant="outlined"
                fullWidth
            />
            <Button
                id="subscribe"
                data-testid="subscribe-button"
                variant="contained"
                sx={{
                    backgroundColor: 'purple',
                    color: '#fff',
                    my: 2,
                }}
            >
                Subscribe
            </Button>
        </React.Fragment>
    )
}

export default Newsletter
