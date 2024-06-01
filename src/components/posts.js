import styled from "styled-components"
import webp from '../assets/posts.gif'
import { Body, FlexContainer } from "../styles/layout"

const GifContainer = styled(FlexContainer)`
  margin-bottom: 24px;
`

const StyledGif = styled('img')`
  width: 100%;
  max-width: 640px;
  height: auto;
  border-radius: 32px;
`

export const Posts = () => {
    return (
        <Body>
            <GifContainer>
                <StyledGif src={webp} />
            </GifContainer>
            This page appears to be under construction ...
        </Body>
    )
}