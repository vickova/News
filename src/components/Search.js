import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SearchNews } from '../actions/newAction';
import News from './News';
import { motion } from 'framer-motion';
import Loading from './Loading';
import Arrow from '../images/back-arrow.svg'

const Search = () => {
const dispatch = useDispatch();
const [textinput, setTextInput] = useState('');
const [searchItem, setSearchItem] = useState(null);
useEffect(()=>{
dispatch(SearchNews(searchItem));
}, [searchItem])
// Get the data back from the store
const FormHandler = (e)=>{
    e.preventDefault();
    // setLoading(true);
    if(textinput ===''){
      setTextInput((prev)=> prev);
    }
    else{
    setSearchItem(textinput.slice(0,1).toUpperCase()+textinput.slice(1,textinput.length));
    }
  }
  const SearchHandler = (e)=>{
    setTextInput(e.target.value);
  }
const {searchNews} = useSelector((state)=> state.news);
console.log(searchNews?searchNews:'')
  return (
    <SearchStyle>
        <div className='head'>
            <div className='arrow'>
                <Link to='/'>
                    <img src={Arrow} alt="arrow" />
                </Link>
                <h2>SEARCHED NEWS</h2>
            </div>
            <div className='input'>
                <input type="text" value={textinput} onChange={SearchHandler}/>
                <button onClick={FormHandler}>Search</button>
            </div>
        </div>
        {searchNews?
        <NewsItem>
            {
                searchNews.searchNews.map((item, i)=>(
                    <News key={i} dateTime={item.webPublicationDate} link={item.webUrl} title={item.webTitle} name={item.sectionName} id={item.id} image={item.fields?.thumbnail}/>
                ))
            }
        </NewsItem>:<Loading/>
        }
    </SearchStyle>
  )
}

const SearchStyle = styled.div`
    margin:3rem 5rem 0 5rem;
    h2{
        font-size:2rem;
        margin:1.5rem 0;
    }
    .head{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:2rem;
        margin-bottom:1rem;
        img{

        }
        img:hover{
            height:50px;
            width:50px;
            padding:.5rem;
            background-color: #e4e3e3;
            border-radius:50%;
            cursor: pointer;
        }
    }
    .arrow{
        display:flex;
        align-items:center;
        gap:1rem;
    }
    .input{
        display:flex;
        align-items:center;
        justify-content:right;
        width:40%;
        input{
            width:75%;
            padding:.5rem 1.5rem;
            font-size:1.2rem;
        }
        button{
            padding:.7rem 1.5rem;
            border:0;
            font-size:1.2rem;
            cursor:pointer;
        }
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
export default Search