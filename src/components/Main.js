import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Basketball } from './AllSvgs'
import Intro from './Intro'
import { motion } from 'framer-motion'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;
h2,h3,h4,h5,h6{
  font-family: 'Karla', sans-serif;
  font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`
const HOOP = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`
const PROJECTS = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text };
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text };
text-decoration: none;
z-index: 1;
` 
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`
const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`


const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}
&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #B22222;
bottom: 0;
right: 50%;
width: ${props => props.click ? '100%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click); 

  return (
    <MainContainer>
      <DarkDiv click={click} />
        <Container>
        <PowerButton />
        <SocialIcons theme={click ? 'dark' : 'light'}/>
        <Center click={click}>
            <Basketball onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
            <span >click the ball</span>
        </Center>

        <Contact target="_blank" to={{pathname:"mailto:rbindu42@gmail.com"}}>
          <motion.h2
            initial={{
              y:-200,
              transition: { type:'spring', duration: 1.5, delay:1 }
            }}
            animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:1 }
            }}
            whileHover={{scale: 1.1, backgroundColor: 'yellow'}}
            whileTap={{scale: 0.9}}
          
          >
            what's good?
          </motion.h2>
        </Contact>
        <HOOP to="/hoop" >
          <motion.h2
          initial={{
            y:-200,
            transition: { type:'spring', duration: 1.5, delay:1 }
          }}
          animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1 }
          }}
          
          whileHover={{scale: 1.1, backgroundColor: 'yellow'}}
          whileTap={{scale: 0.9}}
          
          >
            hoop
          </motion.h2>
        </HOOP>
        <PROJECTS to="/projects" click={click}>
          <motion.h2
          initial={{
            y:-200,
            transition: { type:'spring', duration: 1.5, delay:1 }
          }}
          animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1 }
          }}
          whileHover={{scale: 1.1, backgroundColor: '#B8B8B8'}}
          whileTap={{scale: 0.9}}
          
          >
            projects
          </motion.h2>
        </PROJECTS>
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
            initial={{
              y:200,
              transition: { type:'spring', duration: 1.5, delay:1 }
            }}
            animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:1 }
            }}
            whileHover={{scale: 1.1, backgroundColor: '#B8B8B8'}}
            whileTap={{scale: 0.9}}
            
            >
              about
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
            initial={{
              y:200,
              transition: { type:'spring', duration: 1.5, delay:1 }
            }}
            animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:1 }
            }}
            whileHover={{scale: 1.1, backgroundColor: 'yellow'}}
            whileTap={{scale: 0.9}}

            >
              skills
            </motion.h2>
          </SKILLS>
        </BottomBar>



        </Container>
        {click ? <Intro click={click} /> : null }
    </MainContainer>
  )
}

export default Main