import styled,{ createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    /* html{
        &::-webkit-scrollbar{
            width: 0.5rem;
            position:absolute;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgray;
        }
    } */
    body{
        font-family:'Montserrat', sans-serif;
        width:100%; 
    }

    h1{
        font-family: 'Abril Fatface', cursive;
    }
`

export const SectionStyle = styled.div`
    padding:1rem;
    .sections{
        display:flex;
        align-items:center;
        gap:2rem;
        background-color: #ecebeb;
        margin:1rem 0;
        .text{
            width:45%;
        }
        .image{
            width: 50%;
            img{
                width:100%
            }
        }
        h3{
            font-size:1.3rem;
        }
        p{
            font-size:1.5rem;
        }
    }
    @media screen and (max-width:680px){
        .sections{
            display:block;
            .text{
                width:100%;
            }
            .image{
                width:100%;
            }
        }
    }
`
export default GlobalStyles;