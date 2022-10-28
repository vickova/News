import React from 'react';
import styled from 'styled-components';
import NoImage from '../images/racer.jpg';
import { useScroll } from './useScroll';


const Hero = ({name, dateTime, image, title, link, containerRef}) => {
    const [element, controls] = useScroll()
  const currentDAte = new Date(dateTime).toDateString()
  return (
    <HeroStyle image={image} ref={containerRef}>
        <a href={link} target='blank'>
        <h2>{title}</h2>
        {/* <p className='date'>{currentDAte}</p> */}
        {/* <p>{title}</p> */}
      </a>
    </HeroStyle>
  )
}


const HeroStyle = styled.div`
    background-image:linear-gradient(rgba(245,246,252,0.52), rgba(100, 19, 93, 0.73)),url(${props=>props.image});
    background-size:cover;
    background-repeat:no-repeat;
    object-fit:contain;
    object-position:center;
    color:#FFF;
    height:60vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:1.5rem;
    margin:2rem 0;
    h2{
      font-size:10rem;
    }
`
export default Hero