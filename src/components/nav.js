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
        name: 'Music',
        path: '/music'
    },
    {
        name: 'Art',
        path: '/art'
    },
    {
        name: 'Blog',
        path: '/blog'
    }
]

const generateLinks = (links) => links.map(link => 
    <LinkContainer>
        <StyledLink to={link.path} key={link.name}>{link.name}</StyledLink>
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