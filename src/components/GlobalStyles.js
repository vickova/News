import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
            position:absolute;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgray;
        }
    }
    body{
        font-family:'Montserrat', sans-serif;
        width:100%; 
    }

    h1{
        font-family: 'Abril Fatface', cursive;
    }
`
export default GlobalStyles;