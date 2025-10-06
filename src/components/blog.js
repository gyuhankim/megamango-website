import gif from '../assets/blog.gif'
import { Body, GifContainer, StyledGif } from '../styles/layout'

export const Blog = () => {
    return (
        <Body>
            <GifContainer>
                <StyledGif src={gif} />
            </GifContainer>
            This page appears to be under construction ...
        </Body>
    )
}