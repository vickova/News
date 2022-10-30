import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Facebook from '../images/Facebook.svg';
import Google from '../images/google.svg';
import Apple from '../images/apple.svg';
import ClosedEye from '../images/closed-eye.svg';
import OpenEye from '../images/open-eye.svg';
import PhoneInput from './PhoneInput';
import { country } from '../pages/Home';



const SignIn = () => {
  const [password, setPassword] = useState(false);
  const [confirmpassword, setConfirmPassword] = useState(false);
  return (
    <SignInStyle>
    <div className='signin'>
        <h2>Sign In</h2>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div style={{width:'85%', margin:'0', zIndex:'99'}}>
            <div className='input'>
                <label htmlFor="firstname">First Name</label>
                <input type="text" name='firstname'/>
            </div>
            <div className='input'>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" />
            </div>
            <div className='input'>
                <label htmlFor="email">Email Address</label>
                <input type="email" />
            </div>
            <PhoneInput country={country}/>
            <div className='input'>
                <label htmlFor="password">Enter Password</label>
                <input type={password?"text":"password"} />
                <div className='eye' onClick={()=>setPassword(!password)}>
                {password?
                <img src={OpenEye} alt=" eye" />:
                <img src={ClosedEye} alt=" eye" />
                    }
                </div>
            </div>
            <div className='input'>
                <label htmlFor="confirm">Confirm Password</label>
                <input type={confirmpassword?"text":"password"}/>
                <div className='eye' onClick={()=>setConfirmPassword(!confirmpassword)}>
                {confirmpassword?
                <img src={OpenEye} alt=" eye" />:
                <img src={ClosedEye} alt=" eye" />
                }
                </div>
            </div>
            <Link to='/'>
            <button>Sign In</button>
            </Link>
        </div>
      </form>
      <p className='que'>Already Registered? <span><Link to='/signin'> Log in</Link></span></p>
    </div>
    </SignInStyle>
  )
}

const SignInStyle = styled.div`
  display:flex;
  justify-content:center;
  height:120vh;
  .signin{
    padding:1rem 0;
    border-radius: 21px;
    background-color:#FFF;
    width: 50%;
    h2{
        font-size:2.5rem;
        text-align:center;
    }
  }
  form{
    display:flex;
    justify-content:center;
    z-index:-1;
    input{
      background-color:#FBFBFB;
      height:10%;
      border: 1px solid #001540;
      border-radius:8px;
      display:block;
      width:100%;
      margin:0 0 1rem 0;
      padding:1rem;
      font-size:1rem;
      color: #585858;
      font-weight:600;
      outline:none;
    }
    input::placeholder{
      color: #ABABAB;
      font-weight:normal;
    }
    .coded{
      height: 200px;
			width:120px;
			overflow:auto;
      .option{
        height:40px;
        display:flex;
        align-items:center;
        gap:1rem;
        cursor:pointer;
        img{
          width:30px;
          height:20px;
        }
      }
      .option:hover{
        background-color:#cccbcb;
        padding:.5rem;
      }
    }
    .input{
      position:relative;
      margin:1.5rem 0;
      z-index:1;
      label{
        position:absolute;
        top:-10px;
        left:30px;
        background-color:#FFF;
        font-size:1.2rem;
      }
      .eye{
        position:absolute;
        width:27px;
        height:27px;
        top:10px;
        right:20px;
        cursor:pointer;
      }
    }
    button{
      width:100%;
      height:50px;
      font-size:1.2rem;
      background-color: #077059;
      border:none;
      border-radius:10px;
      color:#f1f1f1;
      &:hover{
        background-color:#076e6eb7;
      }
    }
  }
  
  p{
    text-align:center;
    margin: 2rem 0;
    font-size:1rem;
  }
  .que{
    color: #585858;
    margin:1rem 0;
    span{
      a{
      color: rgba(0, 0, 0);
      cursor:pointer;
      font-weight:900;
      }
    }
  }

  @media screen and (max-width:1600px){
    form{
      .label{
        input{

        }
      }
    }
  }
  @media screen and (min-width:1200px){
    form{
      .label{
        input{
          padding-left:9rem;
        }
      }
    }
  }
  @media screen and (max-width:680px){
        padding:1rem 0;
        width:100%;
        z-index:1;
        .signin{
            width:100%;
        }
        form{
          width:100%;
          .label{
            input{
              padding-right:9rem;
            }
          }
        }
    }
`
export default SignIn