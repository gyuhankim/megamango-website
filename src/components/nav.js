import styled from "styled-components"
import { Link } from "react-router-dom"
import { COLORS } from "../styles/colors"

const NavContainer = styled('div')`
    display: flex;
    justify-content: center;
    margin: 24px 0;
`

const NavLinks = styled('ul')`
    display: flex;
    list-style: none;
    padding: 0;
`

const LinkContainer = styled('li')`
    width: 120px;
    text-align: center;
`

const StyledLink = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    color: ${COLORS.black};

    &:hover {
        font-weight: bold;
        text-decoration: underline;
        text-underline-offset: 6px;
    }
`

const LINKS = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Blog',
        path: '/posts'
    }
]

const generateLinks = (links) => links.map(link => 
    <LinkContainer>
        <StyledLink to={link.path}>{link.name}</StyledLink>
    </LinkContainer>
)


export const Nav = () => {
    return (
        <NavContainer>
            <NavLinks>
                {generateLinks(LINKS)}
            </NavLinks>
        </NavContainer>
    )
}