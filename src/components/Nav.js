import React from 'react';
import styled, {keyframes} from 'styled-components';
import { motion } from 'framer-motion';
import Search from '../images/search.svg';
import {useDispatch, useSelector} from 'react-redux';
import { SearchNews } from '../actions/newAction';
import Chevron from '../images/chevron-down.svg'
import NewsIcon from '../images/news.svg';
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Notify from '../images/notify.svg';
import Exit from '../images/exit.svg';
import Burger from './Burger';

// import { fadeIn } from '../animation';

const Nav = () => {
    const [textInput, setTextInput] = useState('');
    const [toggle, setToggle] = useState(false);
    const [menu, setMenu] = useState(false);
    const [notify, setNotify] = useState(false);
    const touch = useRef();
    const dispatch = useDispatch();
    const {pathname} = useLocation()
    
    const InputHandler = (event)=>{
        setTextInput(event.target.value);
        console.log(textInput)
    }
    const SubmitHandler = (e)=>{
        e.preventDefault();
        dispatch(SearchNews(textInput?textInput:'all'));
        setTextInput('');
    }
    // console.log(textInput)
  return (
    <NavCover pathname={pathname} ref={touch}>
        <div className='menu'>
            <Burger menu={menu} setMenu={setMenu}/>
        <form className='top-input'>
            <div className='search'>
                <div className='search-icon'>
                    <Link to='/search'>
                        <img src={Search} alt="search"/>
                    </Link>
                </div>
            </div>
            <div className='regist'>
                <p><Link to='/signin' className={pathname==='/signin'?'selected':''}><span>SIGNIN</span> / <span>SIGNUP</span></Link></p>
                <img src={Notify} alt="notify" className={notify?'notify':''} onClick={()=>setNotify(!notify)}/>
            </div>
        </form>
        </div>
    <NavStyle $toggle={toggle}>
        <div className='header'>
            <h1><Link to='/'>THE VERACIOUS NEWSPAPER</Link></h1>
        </div>
        <form className='inputs'>
            <div className='search'>
                <div className='search-icon'>
                    <Link to='/search'>
                    <img src={Search} alt="search"/>
                    </Link>
                </div>
            </div>
            <div className='regist'>
                <p><Link to='/signin' className={pathname==='/signin'?'selected':''}><span>SIGNIN</span> / <span>SIGNUP</span></Link></p>
                <img src={Notify} alt="notify" className={notify?'notify':''} onClick={()=>setNotify(!notify)}/>
            </div>
        </form>
    </NavStyle>
    <OptionStyle menu={menu}>
        <ul>
            <li><Link to='/' className={pathname==='/'?'selected':''}>All News</Link></li>
            <li><Link to='/sport' className={pathname==='/sport'?'selected':''}>Sports</Link></li>
            <li><Link to='/politics' className={pathname==='/politics'?'selected':''}>Politics</Link></li>
            <li><Link to='/technology' className={pathname==='/technology'?'selected':''}>Business</Link></li>
        </ul>
    </OptionStyle>
    </NavCover>
  )
}


const NavStyle = styled(motion.div)`
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    gap:4.5rem;
    padding:1rem 5rem 1.5rem 5rem;
    border-bottom:1px solid #121212;
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
        align-items:center;
        gap:1.5rem;
        height:50px;
        width:fit-content;
        background-color:#FFF;
        button{
            font-size:1rem;
            border:1px solid #121212;
            border-left:none;
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
        .regist{
            display:flex;
            align-items:center;
            gap:1rem;
            p{
                cursor:pointer;
                a{
                    text-decoration:none;
                    color:#121212;
                }
                .selected{
                    color:#078b6f;
                    font-weight:700;
                }
            }
            img{
                cursor:pointer;
            }
            .notify{
                background-color: #f35959;
                border-radius:50%;
                padding:.2rem;
            }
        }
    }
    h1{
      margin:0;
      color:#078b6f;
      font-size:2.5rem;
      a{
        text-decoration:none;
        color:#078b6f;
      }
    }
    .search{
        display:flex;
        align-items:center;

        input:focus{
            border:1px solid #121212;
        }
        .search-icon:hover{
            cursor:pointer;
        }
        img{
            right:15px;
            top:10px;
        }
    }
    .see{
        display:block;
    }
    .hidden{
        display:none;
    }
    @media screen and (max-width:680px) {
        padding:1rem;
        justify-content:center;
        gap:1rem;
        h1{
            font-size:1.5rem;
        }
        .inputs{
            display:none;
            .regist{
                p{
                    font-size:1rem;
                }
            }
        }
        form{
            display:none;
        }
        .search{
            input{
                width:200px;
            }
        }
    }
    @media screen and (max-width:400px) {
        text-align:center;
    }
`
const OptionStyle = styled.div`
z-index:2;
    ul{
        display:flex;
        justify-content:center;
        gap:1.5rem;
        margin:1rem 0;
        li{
            list-style:none;
            font-size:1.2rem;
            cursor:pointer;
            a{
                text-decoration:none;
                color:#121212;
            }
            &:hover{
                color:#078b6f;
                font-weight:700;
                a{
                    color:#078b6f;
                }
            }
        }
    }
    @media screen and (max-width:680px) {
        ul{
            display:${({menu})=>menu?'block':'none'};
            position:absolute;
            background-color:#FFF;
            height:${({menu})=>menu?'fit-content':'0px'};
            opacity:${({menu})=>menu?'1':'0'};
            width:100%;
            top:50px;
            padding:1rem;
            li{
                font-size:1.2rem;
                margin:1rem 0;
            }
        }
    }
`
const NavCover = styled.div`
    background-color:#FFF;
    margin:3rem 7rem;
    width:100%;
    margin:0;
    border-bottom:1px solid #121212;
    padding:1rem 0 0 0;
    .top-input{
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:1.5rem;
        height:50px;
        width:fit-content;
        background-color:#FFF;
        button{
            font-size:1rem;
            border:1px solid #121212;
            border-left:none;
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
        .regist{
            display:flex;
            gap:1rem;
            align-items:center;
            p{
                cursor:pointer;
                a{
                    text-decoration:none;
                    color:#121212;
                }
                .selected{
                    color:#078b6f;
                    font-weight:700;
                }
            }
            img{
                cursor:pointer;
            }
            .notify{
                background-color: #f35959;
                border-radius:50%;
                padding:.2rem;
            }
        }
    }
    .search{
        position:relative;
        display:flex;
        box-shadow:${({toggle})=>toggle?'0px 3px 5px rgba(0, 0, 0, 0.1)':''};
        input:focus{
            border:1px solid #121212;
        }
        .search-icon:hover{
            cursor:pointer;
        }
        img{
            position:${({toggle})=>toggle?'absolute':'static'};
            right: 15px;
            top:10px;
        }
    }
    .menu{
        display:none;
        .control{
            width:30px;
            height:30px;
        }
    }
    .see{
        display:block;
    }
    .hidden{
        display:none;
    }
    .selected{
        color:#078b6f;
        font-weight:700;
    }
    @media screen and (max-width:680px) {
        position:${({pathname})=>pathname === '/signin'?'static':'fixed'};        top:0;
        left:0;
        .menu{
            display:flex;
            justify-content:space-between;
            padding:0 1rem;
        }
    }
    @media screen and (max-width:400px){
        .search{
            input{
            width:150px;
            height:30px;
            }
        }
    }
`
export default Nav