import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
:root {

  --read: #E52E4D;
  --blue: #5429cc;
  --blue-light: #6933ff;
  --text-title: #363f5f;
  --text-body: #969cb3;
  --background: #f0f2f5;
  --shape: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  @media(max-width: 1080px){
    font-size: 93.75%; // 15px
  }
  @media(max-width: 720px){
    font-size: 87.5%; // 14px
  }
}

body {
  background: var(----background);
  -webkit-font-smoothing: antialiazed;

}

html, body, #root {
  min-height: 100%;

}


body, input, button {
  font-family:  'Poppins', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5,h6 {
  font-weight: 600;
}
button {
  cursor: pointer;

}
`;
