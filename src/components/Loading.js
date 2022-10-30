import React from 'react';
import styled, {keyframes} from 'styled-components';

const Loading = () => {
  return (
    <LoadingStyle>
      <div>
        <h3>News is coming...</h3>
        <div className='inner'>

        </div>
      </div>
    </LoadingStyle>
  )
}
const spin = keyframes`
    0% {
      transform: rotate(0deg);
      border-top:10px dotted  blue;
    }
    100% {
      transform: rotate(360deg);
      border: 5px solid #ffffff6a;
      scale:1;
    }
  	`
const LoadingStyle = styled.div`
    display: flex;
		justify-content: center;
		align-items: center;
    height:60vh;
    .inner{
      border-radius: 50%;
		width: 100px;
		height: 100px;
		border: 5px solid #ffffff6a;
		border-top-color: rgb(36, 35, 35);
        margin:1rem;
		animation: ${spin} 1s infinite linear;
    }
`

export default Loading