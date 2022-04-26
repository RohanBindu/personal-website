import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/profile-img.png'
import { motion } from 'framer-motion'
import { keyframes } from 'styled-components'

const typing = keyframes`
0%{ width: 0ch; }
23%{ width: 4ch; }
60%{ width: 4ch; }
80%{ width: 4ch; }
90%{ width: 4ch; }
100%{ width: 0ch; }
`
const typing1 = keyframes`
0%{ width: 0ch; }
30%{ width: 0ch; }
60%{ width: 16ch; }
80%{ width: 16ch; }
90%{ width: 16ch; }
100%{ width: 0ch; }
`
const typing2 = keyframes`
0%{ width: 0ch; }
30%{ width: 0ch; }
60%{ width: 0ch; }
80%{ width: 18ch; }
90%{ width: 18ch; }
100%{ width: 0ch; }
`
const caret = keyframes`
   0%, 100%{ border-color: transparent; }
   50%{ border-right: solid black; }
`
const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height: 45vh;
display: flex;

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    #B22222 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    #B22222 50%) top;

    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid #B22222;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    z-index: 1; 
;
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100.5%;
  height: auto;
}
`
const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:first-child{
  font-family: "Source Code Pro", monospace;
  border-right: 3px solid black;
  animation: 
    ${typing} 8.5s steps(4) infinite,
    ${caret} 0.7s infinite step-end;
  white-space: nowrap;
  overflow: hidden;
  
}

&>*:nth-child(2){
  font-family: "Source Code Pro", monospace;
  border-right: 3px solid black;
  animation: 
    ${typing1} 8.5s steps(16) infinite,
    ${caret} 0.7s infinite step-end;
  white-space: nowrap;
  overflow: hidden;
}

&>*:last-child{
  color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
  font-size: calc(0.5rem + 1.5vw);
  font-weight: 300;
  font-family: "Source Code Pro", monospace;
  border-right: 3px solid black;
  animation: 
    ${typing2} 8.5s steps(18) infinite,
    ${caret} 0.7s infinite step-end;
  white-space: nowrap;
  overflow: hidden;
}
`
const Intro = () => {
  return (
    <Box
    initial={{height:0}}
    animate={{height: '55vh'}}
    transition={{ type: 'spring', duration:2, delay:1 }}
    >
        <SubBox>
          <Text>
            <h1>hey,</h1>
            <h3>i'm rohan bindu.</h3>
            <h6>i code and i hoop.</h6>
          </Text>
        </SubBox>
        <SubBox>
          <motion.div
          initial={{opacity:0}}
          animate={{opacity: 1}}
          transition={{ duration:1, delay:2 }}
          >
            <img className="pic" src={Me} alt="Profile Pic"/>
          </motion.div>
        </SubBox>
    </Box>
  )
}

export default Intro