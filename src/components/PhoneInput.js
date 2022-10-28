import React, {useState} from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
// import CountryList from 'country-list-with-dial-code-and-flag/dist'


// You just have to pass the props 'country' from App.js
const PhoneInput = ({country}) => {
    const [toggle, setToggle] = useState(false);
    const [current, setCurrent] = useState(country[0]);
    const [focus, setFocus] = useState(false);

    const expand = ()=>{
      setFocus(true);
    }
    const close = ()=>{
      setFocus(false);
    }
    const Set = (val)=>{
        setCurrent(val);
        setToggle(false);
      }
  return (
    <PhoneInputStyle>
        <div className='label' tabIndex={0} onFocus={expand} onBlur={close}>
          <div className='input'>
            <label htmlFor="phone">Phone number</label>
            <input type="tel" name='phone'/>
          </div>
          <Toggle country={country} toggle={toggle} setToggle={setToggle} current={current}>
            {focus?(
          <div className='coded'>
            {country.map((items, i)=>{
              return(
              <div className='option' key={i} onClick={()=>Set(items)}>
                <img src={items.image} alt="alt" />
                <p>{items.code}</p>
              </div>
              )
            })}
            </div>):null}
          </Toggle>
        </div>
    </PhoneInputStyle>
  )
}

const PhoneInputStyle = styled.div`
    .label{
      position:relative;
      .input{
      position:relative;
      margin:1.5rem 0;
      label{
        position:absolute;
        top:-10px;
        left:30px;
        background-color:#FFF;
        font-size:1.2rem;
      }
      input{
        padding-right:9rem;
      }
    }
    }
`
export default PhoneInput