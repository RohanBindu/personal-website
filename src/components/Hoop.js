import React from 'react'
import styled from 'styled-components'
import BigTitle from '../subComponents/BigTitle'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { motion } from 'framer-motion'

const MainContainer = styled(motion.div)`
height: 3000px; /* Used to enable scrolling */
background: linear-gradient(55deg, #8B0000 0%, #B22222 51%, 	#FF0000 85%);
width: 100vw;
height: 100vh;
`

const Container = styled.div`
background-color: linear-gradient(55deg, #8B0000 0%, #B22222 51%, 	#FF0000 85%);
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
position: relative;
top: 14rem;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
padding-top: 18rem;
color: 		#E8E8E8;
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


const Hoop = () => {

  return (
    <MainContainer
    variants={container}
    initial='hidden'
    animate='show'
    exit={{
      opacity:0, transition:{duration:0.5}
    }}
    >
      <Container>
        <PowerButton theme='dark'/>
        <SocialIcons theme='dark'/>
        <Center>
          <h2>
            coming soon...
          </h2>
        </Center>
        <BigTitle text="HOOP" top="5rem" right="9rem" />
      </Container>
        
    </MainContainer>
  )
}

export default Hoop