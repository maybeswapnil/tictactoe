import {React, useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PlanetOne from './images/planet.svg';
import PlanetTwo from './images/planet-2.svg';
import PlanetThree from './images/planet-3.svg';
import PlanetFour from './images/planet-4.svg';
import PreApp from './PreApp';
import App from './App';


const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  color: #131313;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  z-index: 5;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #131313;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #131313;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 0px;
  }

  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }

  ${Image}:nth-child(3) {
    top: 550px;
    left: 350px;
  }

  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 35px;
  }
`;

const Main = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -400 },
        visible: { opacity: 1, x: 0 }
      };

    const [state, setState] = useState(true);

    
    if(state) {

      return (
          <Section id="lolol">
        <Container>
          <ColumnLeft>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
             Hi,
            </motion.h1>
            <motion.p
              variants={fadeLeft}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1 }}
            >
              Welcome to tictactoe by chemo
            </motion.p>
           
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: '#67F6E7',
                border: 'none',
                color: '#000'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
              onClick={() => {setState(false)}}
            >
              Get Started
            </Button>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={PlanetOne}
              alt='planet'
              whileTap={{ scale: 0.9 }}
              drag={true}
              //dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0.8, y: -100 }}
              animate={{ opacity: 1, y: 130, transition: { repeat: 6, repeatType: "reverse", min:0,max:100,bounceStiffness:100, duration: 12 },  scale: 1.5, rotate: 300  }}
              
            />
            <Image
              src={PlanetTwo}
              alt='planet'
              whileTap={{ scale: 1 }}
              drag={true}
              //dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
              initial={{ opacity: 0.8, x: 400 , scale: 2.2}}
              animate={{ opacity: 1, x: -100, transition: { repeat: 6, repeatType: "reverse", duration: 12 }, scale: 0.2, rotate: 100 }}
              
            />       
            <Image
              src={PlanetFour}
              alt='planet'
              whileTap={{ scale: 0.9 }}
              drag={true}
              //dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              initial={{ opacity: 0.8, y: 700 }}
              animate={{ opacity: 1, y: 0, transition: { repeat: 6, repeatType: "reverse", duration: 12 } , scale: 2.7, rotate: 190}}
            />
          </ColumnRight>
        </Container>
      </Section>
      )
    } else {
      const fadeLeft = {
        hidden: { opacity: 0, x: -400 },
        visible: { opacity: 1, x: 0 }
      };
      return(
        
        <Section id="lolol">
          <Container>
          <ColumnLeft>
          <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
             Hello Person
            </motion.h1>
            <motion.p
              variants={fadeLeft}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1 }}
            >
              Please login to continue
            </motion.p>
          <App />
          </ColumnLeft>

        <ColumnRight>
            <Image
              src={PlanetOne}
              alt='planet'
              whileTap={{ scale: 0.9 }}
              drag={true}
              //dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              initial={{ opacity: 0.8, y: -100 }}
              animate={{ opacity: 1, y: 130, transition: { duration: 20 },  scale: 1.5, rotate: 300  }}
            />
            <Image
              src={PlanetTwo}
              alt='planet'
              whileTap={{ scale: 1 }}
              drag={true}
              //dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
              initial={{ opacity: 0.8, x: 400 , scale: 2.2}}
              animate={{ opacity: 1, x: -100, transition: { duration: 20 }, scale: 0.2, rotate: 100 }}
              
            />       
            <Image
              src={PlanetFour}
              alt='planet'
              whileTap={{ scale: 0.9 }}
              drag={true}
              //dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              initial={{ opacity: 0.8, y: 700 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 20 } , scale: 2.7, rotate: 190}}
            />
          </ColumnRight>
          </Container>
        </Section>
      )
    }
}

export default Main;
