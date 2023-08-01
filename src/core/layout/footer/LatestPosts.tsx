import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'

import { H3 } from '@/components/data-display'

const latestPosts = [
    'Exotic Escapes: Unveiling Hidden Paradises',
    'Cultural Encounters: Unraveling Ancient Mysteries',
    "Foodie's Delight: Culinary Adventures Around the Globe",
    'Off the Beaten Path: Discovering Untouched Beauty',
    'City Skylines and Sunsets: Urban Explorations Abound',
    "Nature's Masterpieces: Breathtaking Landscapes Explored",
]

const LatestPosts = () => {
    return (
        <React.Fragment>
            <H3 data-testid="latest-posts-title">Latest Posts</H3>
            <List>
                {latestPosts.map((post, index) => (
                    <ListItem
                        data-test="latest-post"
                        key={index}
                        sx={{ mx: 2, p: 0 }}
                    >
                        <ListItemText sx={{ mb: 1 }}>{post}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    )
}

export default LatestPosts
