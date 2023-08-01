import React from 'react'
import { styled } from '@mui/system'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, Container, Grid, Typography } from '@mui/material'

import { LatestPosts, Newsletter, SocialMedia, Tags } from '@/core/layout'

const footerTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

const FooterWrapper = styled('footer')({
    backgroundColor: '#222',
    height: 'auto',
    color: '#fff',
    marginTop: 'auto',
})

const Footer = () => {
    return (
        <ThemeProvider theme={footerTheme}>
            <FooterWrapper>
                <Container
                    data-testid="footer"
                    maxWidth="lg"
                    sx={{
                        py: 5,
                    }}
                >
                    <Grid container spacing={5}>
                        <Grid data-testid="newsletter" item xs={12} sm={4}>
                            <Newsletter />
                        </Grid>
                        <Grid data-testid="latest-posts" item xs={12} sm={4}>
                            <LatestPosts />
                        </Grid>
                        <Grid data-testid="tags" item xs={12} sm={4}>
                            <Tags />
                        </Grid>
                    </Grid>
                </Container>
                <Container
                    maxWidth={false}
                    sx={{
                        backgroundColor: '#000',
                        py: 1,
                    }}
                >
                    <Grid container={true} spacing={2}>
                        <Grid
                            data-testid="copyright"
                            item={true}
                            xs={12}
                            sm={6}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '100%',
                                }}
                            >
                                <Typography variant="body2" component="span">
                                    &copy; {new Date().getFullYear()}{' '}
                                    travel@example.com
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            data-testid="social-media"
                            item={true}
                            xs={12}
                            sm={6}
                        >
                            <SocialMedia />
                        </Grid>
                    </Grid>
                </Container>
            </FooterWrapper>
        </ThemeProvider>
    )
}

export default Footer
