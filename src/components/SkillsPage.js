import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import styled from 'styled-components'
import {Design, Develope} from './AllSvgs'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton' 
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'


const Box = styled(motion.div)`
width: 100%;
height:100vh;
position: relative;
padding: 1rem;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: #B22222;
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 40vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.body};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
margin-right: 1rem;
}
`
const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}:hover &{
  color:${props => props.theme.body};
}

strong{
  margin-bottom: 1rem;
}
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

const SkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
      variants={container}
      initial='hidden'
      animate='show'
      exit={{
        opacity:0, transition:{duration:0.5}
      }}
      >
        <SocialIcons theme='dark'/>
        <PowerButton/>
        <ParticleComponent theme='light' />
        <Main>
          <Title>
            <Design width={130} height={50}/> backend developer
          </Title>
          <Description>
          create software products to solve problems
          </Description>
          <Description>
            <strong>skills</strong>
            <ul>
              <li>java</li>
              <li>python</li>
              <li>swift</li>
              <li>c++</li>
            </ul>
          </Description>
          <Description>
            <strong>tools</strong>
            <ul>
              <li>vscode</li>
              <li>github</li>
              <li>postman</li>
              <li>rest apis</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> frontend developer
          </Title>
          <Description>
            designing robust, yet simple apps n websites
          </Description>
          <Description>
            <strong> skills </strong>
            <ul>
              <li>javascript</li>
              <li>html</li>
              <li>css</li>
              <li>react</li>
              <li>firebase</li>
            </ul>
          </Description>
          <Description>
            <strong>tools</strong>
            <ul>
              <li>codepen</li>
              <li>bootstrap</li>
              <li>google fonts</li>
            </ul>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="10%" />
    </Box>
    </ThemeProvider>
  )
}

export default SkillsPage