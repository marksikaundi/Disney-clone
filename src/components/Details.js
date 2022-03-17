import React from 'react'
import styled from 'styled-components'

//<img src="https://th.bing.com/th/id/R.325fbc32c4a653eddf4ff50c2233f0b2?rik=zEEowuc%2flbaAuQ&pid=ImgRaw&r=0" alt="bg" />

function Details() {
  return (
    <Container>
        <Background>
            <img src="https://geekninja.com.br/wp-content/uploads/2021/02/Luca-movie-image-768x400.jpg" alt="bg" />
        </Background>
        <ImageTitle>
            <img src="https://th.bing.com/th/id/R.aa1e3c96dc404743e19371a72fff02b7?rik=AzLW5cPI8vVDFg&pid=ImgRaw&r=0" alt="img" />
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" alt="" />
                <span>Play</span>
            </PlayButton>
            <TailerButton>
            <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>

            </TailerButton>
            <AddButton>

            </AddButton>
            <GroupWatchButton>

            </GroupWatchButton>
        </Controls>

    </Container>
  )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px); 
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right:0
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 20vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
`
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;


`
const TailerButton = styled(PlayButton)`

`
const AddButton = styled.button`

`

const GroupWatchButton = styled.button`

`

