import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Linkedin, Instagram, Twitter } from '../components/AllSvgs'
import styled from 'styled-components'
import {DarkTheme} from '../components/Themes'
import { motion } from 'framer-motion'

import { Logo } from '../components/AllSvgs'

const Ro = styled.div`
position: fixed;
top: 0;
left: 1rem;
font-size: 70px;
z-index: 999;
`
const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body  };

`


const SocialIcons = (props) => {
  return (
    <div>
        <Ro>
        <div>
                <NavLink style={{color:'inherit'}} to="">
                    <Logo height={150} width={120} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </div>
        </Ro>
        <Icons>
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1}}
            >
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/RohanBindu"}}>
                    <Github height={25} width={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.2}}
            >
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.linkedin.com/in/rohan-bindu/"}}>
                    <Linkedin height={25} width={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.4}}
            >
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.instagram.com/romoney0/"}}>
                    <Instagram height={25} width={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://twitter.com/romoney0"}}>
                    <Twitter height={25} width={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </motion.div>
            <Line color={props.theme}
            
            initial={{
                height: 0
            }}
            animate={{
                height: '8rem'
            }}
            transition={{
                type:'spring', duration:1,
            }}
            />
        </Icons>
    </div>
  )
}

export default SocialIcons
