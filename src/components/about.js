import styled from "styled-components"
import webp from '../assets/about.webp'
import { Body, FlexContainer } from "../styles/layout"

const GifContainer = styled(FlexContainer)`
  margin-bottom: 24px;
`

const StyledGif = styled('img')`
  width: 100%;
  max-width: 640px;
  height: auto;
`

export const About = () => {
    return (
        <Body>
            <GifContainer>
                <StyledGif src={webp} />
            </GifContainer>
            Also under construction ...
        </Body>
    )
}