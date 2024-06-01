import styled from 'styled-components'
import gif from './assets/1k2F0B.gif'

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  height: 50vh;
`

const GifContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin: 24px;
`

const TextContainer = styled('div')`
  margin: 24px;
`

const StyleGif = styled('img')`
  width: 640px;
  height: auto;
`

export const App = () => {
  return (
    <Container>
      <GifContainer>
        <StyleGif src={gif} />
      </GifContainer>
      <TextContainer>
        Under construction ...
      </TextContainer>
    </Container>
  )
}