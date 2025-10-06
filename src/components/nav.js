import { LinkContainer, NavContainer, NavLinks, StyledLink } from "../styles/layout"

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
        path: '/blog'
    },
    {
        name: 'Music',
        path: '/music'
    },
    {
        name: 'Art',
        path: '/art'
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