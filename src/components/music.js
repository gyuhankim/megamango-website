import gif from '../assets/music.gif'
import { Body, GifContainer, StyledGif } from '../styles/layout'

export const Music = () => {
    return (
        <Body>
            <GifContainer>
                <StyledGif src={gif} />
            </GifContainer>
            This page is not ready but it appears to have been worked on more than the others ...
        </Body>
    )
}