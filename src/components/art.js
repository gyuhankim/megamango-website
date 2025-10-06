import gif from '../assets/art.gif'
import { Body, GifContainer, StyledGif } from '../styles/layout'

export const Art = () => {
    return (
        <Body>
            <GifContainer>
                <StyledGif src={gif} />
            </GifContainer>
            When will this page ever get done ...
        </Body>
    )
}