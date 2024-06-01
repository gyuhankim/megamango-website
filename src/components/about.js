import styled from "styled-components"
import gif from '../assets/about.gif'
import { Body, FlexContainer } from "../styles/layout"

const GifContainer = styled(FlexContainer)`
  margin-bottom: 24px;
  border-radius: 32px;
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
                <StyledGif src={gif} />
            </GifContainer>
            Also under construction ...
        </Body>
    )
}