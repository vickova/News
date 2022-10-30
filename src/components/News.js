import React from 'react';
import {Link} from 'react-router-dom';
import NoImage from '../images/racer.jpg';
// Styling and animation
import styled, { keyframes } from 'styled-components';
import {motion} from 'framer-motion';
import { useScroll } from './useScroll';
import { fadeIn, slideIn } from '../animation';
import { Keyframes } from 'styled-components';

const News = ({name, dateTime, image, title, link}) => {
  const [element, controls] = useScroll()
  const currentDAte = new Date(dateTime).toDateString()
  return (
    <NewsStyle animate={controls} initial='show' variants={slideIn} ref={element} whileInView={{opacity:1}}>
      <a href={link} target='blank'>
        <div className='top'>
          <h4>{name}</h4>
          <p className='date'>{currentDAte}</p>
        </div>
        <img src={image?image:NoImage} alt={name} />
        <h3>{title}</h3>
      </a>
    </NewsStyle>
  )
}

const NewsStyle = styled(motion.div)`
min-height:30vh;
box-shadow:0px 5px 30px rgba(0, 0, 0, 0.2);
padding:1.5rem;
border-radius:1rem 0;
animation:linear 2s 10s;
background-color:#FFF;
z-index:1;
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
  h4{
    font-weight:500;
    font-size:1.5rem;
    margin:1rem 0;
  }
  h3{
    font-size:2rem;
    margin:1rem 0;
    font-weight:500;
  }
  p{
    font-size:1.2rem;
  }
  .date{
    margin:.5rem 0;
  }
  img{
    width:100%;
    height:35vh;
    object-fit:cover;
  }
  .top{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:2rem;
  }
  @media screen and (max-width:680px){
    p{
      font-size:1rem;
    }
    h3{
      font-size:1.2rem;
    }
  }
  @media screen and (max-width:400px){
    margin:1.5rem 0;
    h3{
      font-size:1rem;
    }
    .top{
      h4{
        max-width:50%;
      }
    }
  }
`
export default News;