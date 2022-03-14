import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />

        <NavMenu>
            <a>
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
            </a>
            <a>
                <img src="/images/search-icon.svg" />
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/images/original-icon.svg" />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg" />
                <span>MOVIES</span>
            </a>
            <a>
                <img src="/images/series-icon.svg" alt='' />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <UserImg src="https://media.istockphoto.com/photos/concept-deep-learning-gui-picture-id1244482898?k=20&m=1244482898&s=612x612&w=0&h=uKIvgL9HOraGlx0_2qbmzS3X1w4W5dzupzFZ4PrgQ2Q=" alt="no image" />
    </Nav>
  )
}

export default Header

// ended on 2:54:18
// styled components
const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;

`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`






