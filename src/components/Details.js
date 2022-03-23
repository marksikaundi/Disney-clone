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
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
        </Controls>
            <SubTitle>
                2022 * 7m * Education, Science, Innovstive, Technology
            </SubTitle>
            <Description>
                Technology is the continually developing result of accumulated knowledge and application in all techniques, skills, methods, and processes used in industrial production and scientific research. Technology is embedded in the operation of
            </Description>
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
    align-items: center;
`
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;
background-color: rgb(249, 249, 249);
border: none;
padding: 0px 24px;
margin-right: 22px;
text-transform: uppercase;
letter-spacing: 1.8px;
cursor: pointer;

&:hover {
    background: rgb(198, 198, 198);
}
`
const TailerButton = styled(PlayButton)`
background: rgb(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249)
color: rgb(249, 249, 249);
text-transform: uppercase;

`
const AddButton = styled.button`
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
cursor: pointer;
margin-right: 16px;

span {
    font-size: 30px;
}

`

const GroupWatchButton = styled(AddButton)`
background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
margin-top: 30px;
`
const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249, 249, 249);

`

// details finished