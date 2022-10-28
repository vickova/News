import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect, useRef, useState} from 'react';
import {LoadNews} from '../actions/newAction';
// Styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useScroll} from '../components/useScroll';
import { Route, Routes } from 'react-router-dom';
import Technology from '../components/Technology';
import Sport from '../components/Sport';
import Politics from '../components/Politics';
import Frontpage from '../components/Frontpage';
import SignIn from '../components/Signin';
import Search from '../components/Search';
// Images
import Nigeria from '../images/nigeria.svg';
import SouthAfrica from '../images/south-africa-flag.svg';
import Ghana from '../images/ghana-flag.svg';
import Uganda from '../images/uganda-flag.svg';
import Uk from '../images/united-kingdom-flag.svg';
import France from '../images/france-flag.svg';


export const country = [
    {
      code:'+234',
      image:Nigeria
    },
    {
      code:'+27',
      image:SouthAfrica
    },
    {
      code:'+233',
      image:Ghana
    },
    {
      code:'+256',
      image:Uganda
    },
    {
      code:'+44',
      image:Uk
    },
    {
      code:'+233',
      image:Ghana
    },
    {
      code:'+33',
      image:France
    },
  ];
const Home = () => {
    const [element, controls] = useScroll();
    const containerRef = useRef(null);
    const infiniteRef = useRef(null)?.current;
    console.log(containerRef)
    const {news, pagenum} = useSelector((state)=> state.news);
// Fetch News
const dispatch = useDispatch();
useEffect(()=>{
dispatch(LoadNews(pagenum));
// Intersection(containerRef?.current);
// InfiniteSection(infiniteRef);
}, [])
// Get the data back from the store

const heroNews = news[news.length-1];
  return (
        <HomeStyle>
        <Routes>
            <Route path='/' element={<Frontpage news={news}/>} containerRef={containerRef} infiniteRef={infiniteRef}/>
            <Route path='/sport' element={<Sport news={news}/>}/>
            <Route path='/technology' element={<Technology news={news}/>}/>
            <Route path='/politics' element={<Politics news={news}/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/search' element={<Search/>}/>
        </Routes>
        </HomeStyle>
  )
}

const HomeStyle = styled.div`
@media screen and (max-width:680px) {
    margin-top:15rem;
}
`

export default Home