import React from 'react';
import { SectionStyle } from './GlobalStyles';

const Politics = ({news}) => {

  return (
    <SectionStyle>
        {
            news.map((item, i)=>{
                const currentDAte = new Date(item.webPublicationDate).toDateString();
                if(item.sectionName === 'Politics'){
                return(
                    <div key={i} className='sections'>
                        <div className='image'>
                            <img src={item.fields?.thumbnail} alt="" />
                        </div>
                        <div className='text'>
                            <h3>{currentDAte}</h3>
                            <p>{item.webTitle}</p>
                        </div>
                    </div>
                )
                }
            })
        }
    </SectionStyle>
  )
}

export default Politics;