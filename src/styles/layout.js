import styled from "styled-components";
import { COLORS } from "./colors";
import { Link } from "react-router-dom";

export const Body = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 24px;
    text-align: center;
    padding: 24px;
`

export const FlexContainer = styled('div')`
    display: flex;
    justify-content: center;
`

export const NavContainer = styled('div')`
    display: flex;
    justify-content: center;
    margin: 24px 0;
`

export const NavLinks = styled('ul')`
    display: flex;
    list-style: none;
    padding: 0;
`

export const LinkContainer = styled('li')`
    width: 120px;
    text-align: center;
`

export const StyledLink = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    color: ${COLORS.black};

    &:hover {
        font-weight: bold;
        text-decoration: underline;
        text-underline-offset: 6px;
    }
`

export const GifContainer = styled(FlexContainer)`
  margin-bottom: 24px;
  `
  
export const StyledGif = styled('img')`
  width: 100%;
  max-width: 640px;
  height: auto;
  border-radius: 32px;
`