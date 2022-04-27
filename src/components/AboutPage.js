import React from 'react'
import BigTitle from '../subComponents/BigTitle'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import styled from 'styled-components'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton' 
import ParticleComponent from '../subComponents/ParticleComponent'
import { motion } from 'framer-motion'

const BigBox = styled(motion.div)`
background-color: black;
width: 100vw;
height:100vh;
position: absolute;
overflow: hidden;
justify-content: space-evenly;
`
const Box = styled.div`  
border: 2px solid #B22222;
color: ${props => props.theme.text}; 
padding: 1rem;
width: 30vw;
height: 80vh;
z-index: 3;
line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(30px);
position: absolute;
right: calc(1.9rem + 0.1vw);
top: 5rem;

font-family: 'Ubuntu Mono',monospace;
font-style: italic;
`
const Main = styled.div`
border: 2px solid #B22222;
color: ${props => props.theme.text}; 
padding: 2rem;
width: 50vw;
height: 60vh;

line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(30px);

position: absolute;
left: calc(5rem + 2vw);
top: 10rem;

font-family: 'Ubuntu Mono',monospace;
font-style: italic;
`

const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}



const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <BigBox
      variants={container}
      initial='hidden'
      animate='show'
      exit={{
        opacity:0, transition:{duration:0.5}
      }}
      >
      <BigTitle text="ABOUT" top="3%" left="9%" />
        <SocialIcons theme='dark'/>
        <PowerButton/>
        <ParticleComponent theme='light' />
        <Main></Main>
        <Main>
        </Main>
        <Main>
          sophomore @ uiuc studying mathematics wtf
          <br/>
          with a strong interest in computer science
          <br />
          <br />
          currently developing as a software intern at suquino,
          <br />
          building web3 projects at illini blockchain club,
          <br />
          and exploring entrepreneurship with zero2one 
          <br />
          <br />
          if you ever wanna talk about hoops, crypto, stocks, 
          <br />
          music, or anythin in general -- connect with me 
          <br />
          <br />
          deuces
        </Main>
        <Box></Box>
        <Box></Box>
        <Box>
          timeline
          <br />
          <br />
          <br />
          <br />
          <br />
          coming soon...
        </Box>
    </BigBox>
    </ThemeProvider>
  )
}

export default AboutPage