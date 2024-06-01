import styled from 'styled-components'
import gif from '../assets/home.gif'
import { Body, FlexContainer } from "../styles/layout"

const GifContainer = styled(FlexContainer)`
  margin-bottom: 24px;
`

const StyledGif = styled('img')`
  width: 100%;
  max-width: 640px;
  height: auto;
`

export const App = () => {
  return (
    <Body>
      <GifContainer>
        <StyledGif src={gif} />
      </GifContainer>
        Under construction ...
    </Body>
  )
}