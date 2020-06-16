import { createGlobalStyle } from 'styled-components';

// font-family: 'Noto Sans HK', sans-serif;

// font-family: 'Quattrocento Sans', sans-serif;

export default createGlobalStyle`
  *::before,*::after,*{
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  html {
      font-size: ${(props) => props.theme.appSize};
      font-family: 'Noto Sans HK', sans-serif;
    }
    body {
      box-sizing: border-box;
      font-family: 'Noto Sans HK', sans-serif;
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
    }
    ul{
      list-style:none;
    }
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.white};
      font-size: ${(props) => props.theme.size.a};
      font-family: 'Quattrocento Sans', sans-serif;
    }

    h1{
      font-size: ${(props) => props.theme.size.h1};
      font-family: 'Quattrocento Sans', sans-serif;
    }
    h2{
      font-size: ${(props) => props.theme.size.h2};

    }
    h3{
      font-size: ${(props) => props.theme.size.h3};

    }
`;
