import React from 'react';
import styled, {keyframes} from 'styled-components';
import { motion } from 'framer-motion';
import Search from '../images/search.svg';
import {useDispatch, useSelector} from 'react-redux';
import { SearchNews } from '../actions/newAction';
import Chevron from '../images/chevron-down.svg'
import NewsIcon from '../images/news.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import { fadeIn } from '../animation';

const Nav = () => {
    const [textInput, setTextInput] = useState('');
    const dispatch = useDispatch();
    
    const InputHandler = (event)=>{
        setTextInput(event.target.value);
        console.log(textInput)
    }
    const SubmitHandler = (e)=>{
        e.preventDefault();
        dispatch(SearchNews(textInput?textInput:'all'));
        setTextInput('');
    }
    console.log(textInput)
  return (
    <NavStyle>
        <div className='header'>
            <img src={NewsIcon} alt="newsicon" />
            <h1>NEWS</h1>
        </div>
        <form className='inputs'>
            <div className='search'>
                <input type="text" value={textInput} onChange={InputHandler}/>
                <Link to='/search'>
                    <img src={Search} alt="search" onClick={SubmitHandler}/>
                </Link>
            </div>
            <button type='submit' onClick={SubmitHandler}><Link to='/search'>Search</Link></button>
        </form>
    </NavStyle>
  )
}

const back = keyframes`
  0%{
    background-color: #c2c0c0;
    scale:0;
    object-fit:cover;
  }
  50%{
    object-fit:contain;
  }
  100%{
    background-color: #fff;
    scale:1;
    padding:0;
    object-fit:cover;
    
  }
`
const NavStyle = styled(motion.div)`
    display:flex;
    justify-content:space-between;
    margin:3rem 7rem;
    margin-top:0;
    padding:1.5rem 5rem 1.5rem 5rem;
    position:fixed;
    background-color:#FFF;
    overflow:hidden;
    top:0;
    width:100%;
    margin:0;
    .header{
        display:flex;
        align-items:center;
        gap:1rem;
        cursor:pointer;
        img{
            height:60px;
            width:50px;
            
        }
    }
    .inputs{
        display:flex;
        height:50px;
        box-shadow:0px 5px 15px rgba(0, 0, 0, 0.2);
        background-color:#FFF;
        button{
            font-size:1rem;
            border:1px solid #121212;
            border-left:none;
            animation:${back} 2s ease;
            a{
                padding:1rem;
                text-decoration:none;
                color:#121212;
            }
        }
        button:hover{
            border-left:1px solid #121212;
            animation:all 2s ease;
            background-color: #a7a4a4;
        }
    }
    h1{
      margin:0;
    }
    .search{
        position:relative;
        input{
            height: 50px;
            width:300px;
            padding:.5rem 2.5rem .5rem .5rem;
            font-size:1.2rem;
            outline:none;
            color:#121212;
            border:none;
        }
        input:focus{
            border:1px solid #121212;
        }
        img{
            position:absolute;
            right: 15px;
            top:10px;
        }
    }
    @media screen and (max-width:680px) {
        font-size:1rem;
        margin:3rem 1.5rem;
        h1{
            font-size:1.5rem;
        }
        .header{
            img{
                display:none;
            }
        }
        .search{
        input{
            width:150px;
            height:30px;
            font-size:.9rem;
            padding: 0 2.5rem 0 .5rem;
        }
        }
        .inputs{
            height:30px;
        }
    }
    @media screen and (max-width:400px) {
        position:fixed;
        overflow:hidden;
        background-color:#c9c7c7;
        top:0;
        width:100%;
        margin:0;
        padding:1rem 2rem;
        .search{
            input{
                padding: 0 .7rem 0 .5rem;
            }
        }
        .inputs{
            button{
                display:none;
            }
            .search{
                display:flex;
                img{
                    position:static;
                }
            }
        }
    }
`
export default Nav