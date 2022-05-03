import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }


  a:link,
  a:visited {
    color: #0077cc;
  }

  a:hover,
  a:focus {
    color: #004499;
  }

  code,
  pre {
    max-width: 100%;
    overflow: auto;
    margin: 0 auto;
  }
`;
