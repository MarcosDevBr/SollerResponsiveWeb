import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;

        // firefox styles
        scrollbar-width: thin;
        scrollbar-color: rgba(0,0,0,0.1) white;
    }

    body {
        background: ${(props) => props.theme.SYSTEM_BACKGROUND};
        height:100vh;
        width:100vw;
        overflow: hidden;
        transition: background 0.5s;
        display: flex;

        color:${(props) => props.theme.ITENS_TEXT};
        font-family: Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        font-size: 13px;
        font-variant: tabular-nums;
        line-height: 1.5715;

        h2 {
            color: rgba(0,0,0,.85);
            font-weight: 500;
            margin-bottom: 0.5em;
            margin-top: 0;
        }
        
    }
    
    #root { 
        display: flex;
        flex: 1;
        overflow:hidden;
        
        -black: #101314;
        --grey-4: #9c9e9e;
        --white: #fafafa;
        --gray-7: #171b1c;
        --grey-3: #cbcccc;
        --grey-2: #e3e3e3;
        --grey-5: #6e6f70;
        --goldenrod: #f7b83d;
        --grey-6: #3f4142;
        --grey-1: #eeeeef;
    }

    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    *::-webkit-scrollbar-track {
        -webkit-box-shadow: none;
    }

    *::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.1);
        border-radius: 60px;
    }

`;
