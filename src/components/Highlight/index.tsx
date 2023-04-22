import React from 'react'
import { Subtitle, Title, Container } from './styles';

type HighlightProps = {
    title: string,
    subtitle: string
}
export const Highlight = ({ title, subtitle }: HighlightProps) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}
