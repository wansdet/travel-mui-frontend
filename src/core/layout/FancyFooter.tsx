import React from 'react'
import { styled } from '@mui/system'
import { Grid, Typography } from '@mui/material'

const FooterContainer = styled('footer')({
    backgroundColor: '#222',
    height: '200px',
    display: 'flex',
    color: '#ffffff',
    padding: '0 0px',
})

const Column = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const Copyright = styled(Typography)({
    marginLeft: 'auto',
})

const FancyFooter = () => {
    return (
        <React.Fragment>
            <FooterContainer>
                <Grid container>
                    <Grid item xs={6} sm={3} component={Column}>
                        {/* Add your content for the first column */}
                        <Typography variant="body2">Social Media</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} component={Column}>
                        {/* Add your content for the second column */}
                        <Typography variant="body2">Contact Details</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} component={Column}>
                        {/* Add your content for the third column */}
                        <Typography variant="body2">Links</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3} component={Column}>
                        {/* Add your content for the fourth column */}
                        <Typography variant="body2">Sample Stuff</Typography>
                    </Grid>
                    <Column>
                        <Typography variant="body2" component="span">
                            &copy; {new Date().getFullYear()} Your Website
                        </Typography>
                    </Column>
                </Grid>
            </FooterContainer>
        </React.Fragment>
    )
}

export default FancyFooter
