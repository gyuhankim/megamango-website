import gif from '../assets/home.gif'
import { Body, GifContainer, StyledGif } from '../styles/layout'

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