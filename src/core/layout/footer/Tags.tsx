import React from 'react'
import { Chip } from '@mui/material'

import { H3 } from '@/components/data-display'

const tags = [
    'exotic escapes',
    'seascapes',
    'adventures',
    'culture',
    'global',
    'natural beauty',
    'city skylines',
    'landscapes',
    'hidden gems',
    'cultural immersion',
    'urban wonders',
    'remote getaways',
    'historic sites',
]

const Tags = () => {
    return (
        <React.Fragment>
            <H3 data-testid="tags">Tags</H3>
            {tags.map((tag, index) => (
                <Chip
                    sx={{ mb: 1, mr: 1 }}
                    label={tag.toUpperCase()}
                    variant="outlined"
                />
            ))}
        </React.Fragment>
    )
}

export default Tags
