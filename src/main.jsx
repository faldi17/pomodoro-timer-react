import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App.jsx';
import StateProvider from './components/StateProvider.jsx';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: ${(props) => props.theme.colors.bg};
    font-family: 'Poppins', sans-serif;
    font-size: 60%;
  }
  
  body {
    font-size: 1.5rem;
    color: #ffffff;
  }
`;

const theme = {
    colors: {
        primary: '#004c68',
        secondary: '#002634',
        bg: '#008abd',
    },
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <StateProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </StateProvider>
    </StrictMode>
);
