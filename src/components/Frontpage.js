import React, {useRef} from 'react';
import Loading from './Loading';
import News from './News';
import Hero from './Hero';
import { Intersection } from './useScroll';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Frontpage = ({news, containerRef, infiniteRef}) => {
// Fetch News

    const heroNews = news[news.length-1];
  return (
    <NewsList>
        <h2>ALL NEWS</h2>
        <Hero containerRef={containerRef} dateTime={heroNews?.webPublicationDate} title={heroNews?.webTitle} name={heroNews?.sectionName} image={heroNews?.fields?.thumbnail}/>        
        {news.length>0?
        <NewsItem>
            {
                news.map((item, i)=>(
                    <News key={i} dateTime={item.webPublicationDate} link={item.webUrl} title={item.webTitle} name={item.sectionName} id={item.id} image={item.fields?.thumbnail}/>
                ))
            }
        </NewsItem>:<Loading/>
        }
        {/* <Hero containerRef={containerRef} dateTime={heroNews?.webPublicationDate} title={heroNews?.webTitle} name={heroNews?.sectionName} image={heroNews?.fields?.thumbnail}/> */}
    </NewsList>
  )
}

const NewsList = styled(motion.div)`
    margin:5rem 3rem;
    h2{
        font-size:2rem;
        margin:1.5rem 0;
    }
    @media screen and (max-width:680px){
        border-top:none;
        h2{
            font-size:1.5rem;
        }
    }
    @media screen and (max-width:360px){
        margin:2rem 1rem;
    }
`
const NewsItem = styled(motion.div)`
    min-height:80vh;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap:3rem;
    grid-row-gap:5rem;
    @media screen and (max-width:680px){
        grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    }
`
export default Frontpage