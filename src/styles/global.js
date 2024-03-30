import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from './themes/context'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${(props) => props.theme};
    font-size: 16px;
    color: ${(props) => props.theme};
    font-family: sans-serif;
}

`
