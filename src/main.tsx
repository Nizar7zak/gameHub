import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
