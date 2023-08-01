import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'

import { SecurityContext } from '@/core/security'
import Container from '@mui/material/Container'
import { H1 } from '@/components/data-display'

const SignOut = () => {
    const auth = useContext(SecurityContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout(() => navigate('/'))
    }

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <H1>Sign out</H1>
                <Typography variant="body1" mb={5} gutterBottom>
                    Are sure you want to logout?
                </Typography>
                <Button variant="contained" onClick={handleLogout}>
                    Confirm Sign out
                </Button>
            </Container>
        </React.Fragment>
    )
}

export default SignOut
