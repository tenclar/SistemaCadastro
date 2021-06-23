import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { GlobalStyle } from './styles/global';
import AppProvider from './hooks';

export const App: React.FC = () => (
  <AppProvider>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AppProvider>
);
