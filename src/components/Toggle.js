import React from 'react'
import Chevron from '../images/chevron-down.svg';
import styled from 'styled-components'

const Toggle = ({children, country, toggle, setToggle, current}) => {
  return (
    <ToggleStyle toggle={toggle}>
        <div className='select'>
            <div className='code-sec-cover'>
                <div className='code-sec'>
                    <img src={current.image} alt="flag" />
                    <p>{current.code}</p>
                </div>
                <div className={`${toggle?'open':''}`}>
                {toggle?children:''}
                </div>
            </div>
            <img src={Chevron} alt="arrow" onClick={()=>setToggle(!toggle)}/>
        </div>
    </ToggleStyle>
  )
}

const ToggleStyle = styled.div`
    .select{
      width: 120px;
      height:40px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:.5rem;
      position:absolute;
      top:10px;
      right:15px;
      img:last-child{
        cursor: pointer;
        transform:${({toggle})=> toggle?'rotate(-90deg)':''}
      }
      .code-sec{
        display:flex;
        align-items:center;
        gap:.5rem;
        height:40px;
        width:70px;
        img{
          width:30px;
          height:20px;
        }
        p{
          margin:0;
          width:50%;
        }
      }
      .country-option{
        background-color:#FFF;
        width:150px;
        z-index:2;
      }
      .open{
        position:absolute;
        top:50px;
        left:-15px;
        z-index:2;
        background-color:#FBFBFB;
        width:100px;
      }
    }
    @media screen and (max-width:1600px){
      .select{
        gap:2rem;
        
        .code-sec{
          width:60%;
        }
      }
    }
    @media screen and (max-width:680px){
      .select{
        .open{
          top:-50px;
        }
      }
    }
    /* @media screen and (min-width:1200px){
      .select{
        width:13%;
      }
    } */
`
export default Toggle