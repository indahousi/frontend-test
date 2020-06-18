import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900&display=swap');
    
    body {
        margin: 0px;
        font-family: 'Montserrat', sans-serif;
        overflow-x:hidden;
    }
    
    h1,h2,h3,h4,h5,h6{
      -webkit-margin-before: 0em;
      margin-block-start: 0em;
      -webkit-margin-after: 0.2em;
      margin-block-end: 0.2em;
    }

    p{
      margin-block-start: 0.2em;
      margin-block-end: 0em;
    }

    .just-mobile-visible{
      @media(min-width: ${(props) => props.theme.breakpoints.md}){
        display: none !important;
      }
    }

    .just-desktop-visible{
        display: none !important;
      @media(min-width: ${(props) => props.theme.breakpoints.md}){
        display: block !important;
      }
    }

    .container-lg{
      @media (min-width: 1200px){
        max-width: 1340px !important;
      }
    }
    
    .Toastify__toast-container{
      z-index: 999999999999 !important;
    }

    .Toastify__toast--success{
      background: ${(props) => props.theme.colors.actions.success} !important;
    }
    .Toastify__toast--danger{
      background: ${(props) => props.theme.colors.actions.danger} !important;
    }
    .Toastify__toast--warning{
      background: ${(props) => props.theme.colors.actions.info} !important;
    }
    
    .button-image-compare{
        width: 50px;
        height: 50px;
        background: rgb(245,245,245);
        border-radius: 5px;
        position: absolute;
        cursor: col-resize;
        border: none;
        transition: all 0.2s;
        display: flex;
        justify-content:center;
        align-items:center;
        :hover,:active{
          background: rgb(255,255,255);
        }
    }
    
    .scalable-hover:hover {
      transform: scale(1);
    }
    .scalable-hover:hover {
      transform: scale(1.6);
      transition: transform 0.2s ease;
      will-change: transform;
    }
`
