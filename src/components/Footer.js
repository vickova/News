import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Github from '../images/github.svg';
import Facebook from '../images/icon-facebook.svg';
import Instagram from '../images/icon-instagram.svg';
import Twitter from '../images/icon-twitter.svg';
import LinkedIn from '../images/linkedin.svg';



const Footer = () => {
  return (
    <FooterStyle>
        <div className='single'>
            <h3>Information</h3>
            <p>Built with https://amannee-server.onrender.com/</p>
            <p>Developed by Victoria Olumide</p>
        </div>
        <div className='single'>
            <h3>Resources</h3>
            <p>Contact</p>
            <p>About</p>
        </div>
        <div className='single'>
            <h3>Links</h3>
            <div className='imgs'>
            <a href="https://github.com/vickova"><img src={Github} alt="Github_icon"/></a>
            <a href="https://www.facebook.com/olumide.victoria.56"><img src={Facebook} alt="facebook_icon"/></a>
            <a href="https://twitter.com/OlumideVictori3"><img src={Twitter} alt="twitter_icon"/></a>
            <a href="https://www.linkedin.com/in/victoria-olumide-90439b163/"><img src={LinkedIn} alt="Linkedin_icon"/></a>
            </div>
        </div>
    </FooterStyle>
  )
}

const FooterStyle = styled(motion.div)`
    background-color:#121212;
    margin-top:4rem;
    color: #cfcdcd;
    display:flex;
    padding:1rem 5rem;
    flex-wrap:wrap;
    justify-content:space-between;
    border-top:1px solid #747272;
    .imgs{
        display:flex;
        align-items:flex-end;
        gap:1rem;
        margin:1rem 0;
        a{
        width:30px;
        height:30px;
        img{
            width:100%;
        }
        }
    }
    h3{
        font-size:1.5rem;
    }
    p{
        font-size:1.2rem;
        margin:1rem 0;
        cursor:pointer;
    }
    @media screen and (max-width:680px){
        padding:1rem;
        p{
            font-size:1rem;
        }
        h3{
            font-size:1.5rem;
        }
    }

`
export default Footer