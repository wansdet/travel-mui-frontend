import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { Overwrite } from '@mui/types'

type ParagraphProps = Overwrite<TypographyProps, { ref?: any; component?: any }>

const Paragraph = ({
    children,
    ...props
}: {
    children: React.ReactNode
} & ParagraphProps) => {
    return (
        <div>
            <Typography data-test="p" paragraph {...props}>
                {children}
            </Typography>
        </div>
    )
}

export default Paragraph
