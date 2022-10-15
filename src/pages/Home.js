import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {LoadNews} from '../actions/newAction';
// Styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
// Components
import Loading from '../components/Loading';
import News from '../components/News';

const Home = () => {
// Fetch News
const dispatch = useDispatch();
useEffect(()=>{
dispatch(LoadNews());
}, [])
// Get the data back from the store
const {news, searchNews} = useSelector((state)=> state.news);
console.log(news)
console.log(searchNews?searchNews:'');
  return (
    <NewsList>
        
        <h2>TODAY'S NEWS</h2>
        {news.length>0?
        <NewsItem>
            {
                news.map((item, i)=>(
                    <News key={i} dateTime={item.webPublicationDate} link={item.webUrl} title={item.webTitle} name={item.sectionName} id={item.id} image={item.fields?.thumbnail}/>
                ))
            }
        </NewsItem>:<Loading/>
        }
    </NewsList>
  )
}

const NewsList = styled(motion.div)`
    margin:7rem 5rem 0 5rem;
    border-top:1px solid #c9c7c7;
    h2{
        font-size:2rem;
        margin:1.5rem 0;
    }
    @media screen and (max-width:680px){
        margin:7rem 1.5rem 0 1.5rem;
        border-top:none;
        h2{
            font-size:1.5rem;
        }
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
export default Home