import React from 'react';
import {Link} from 'react-router-dom';
import NoImage from '../images/racer.jpg'
// Styling and animation
import styled, { keyframes } from 'styled-components';
import {motion} from 'framer-motion';
import { fadeIn } from '../animation';
import { Keyframes } from 'styled-components';

const News = ({name, dateTime, image, title, link}) => {
  const currentDAte = new Date(dateTime).toDateString()
  return (
    <NewsStyle variants={fadeIn} initial='hidden' animate='show' whileInView={{opacity:1}}>
      <a href={link} target='blank'>
        <img src={image?image:NoImage} alt={name} />
        <h3>{name}</h3>
        <p className='date'>{currentDAte}</p>
        <p>{title}</p>
      </a>
    </NewsStyle>
  )
}

const Animate = keyframes`
  0%{
    background-color: #c2c0c0;
    scale:0;
    padding:1.5rem;
  }
  50%{
  }
  100%{
    background-color: #fff;
    scale:1;
    padding:1rem;
  }
`
const back = keyframes`
  0%{
    background-color: #c2c0c0;
    scale:0;
    object-fit:cover;
    height:0;
  }
  50%{
  }
  100%{
    background-color: #fff;
    scale:1;
    padding:0;
    object-fit:cover;
    height:60%;
    
  }
`

const NewsStyle = styled(motion.div)`
min-height:30vh;
box-shadow:0px 5px 30px rgba(0, 0, 0, 0.2);
padding:1.5rem;
border-radius:1rem 0;
animation:${Animate} ease 2s;
background-color:#FFF;
&:hover{
  padding:1rem;
  animation:all 1s ease-in;
}
  a{
  text-decoration:none;
  color:#121212;
  }
  a:visited{
    color: red;
  }
  h3{
    font-weight:700;
    font-size:1.5rem;
    margin:1rem 0;
  }
  p{
    font-size:1.2rem;
  }
  .date{
    font-weight:600;
    margin:.5rem 0;
  }
  img{
    width:100%;
    height:35vh;
    object-fit:cover;
    animation:${back} ease-out 2s;
  }
  @media screen and (max-width:680px){
    p{
      font-size:1rem;
    }
    h3{
      font-size:1.2rem;
    }
  }
`
export default News;