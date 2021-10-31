import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import { createTheme, ThemeProvider } from '@mui/material';
import funStore from './store/funStore';
import TestScreen from './screen/TestScreen';
import Rakhal from './components/Rakhal';
const theme = createTheme();

// ReactDOM.render(
//   <Provider store={funStore}>
//     <ThemeProvider theme={theme}>
//       {/* <TestScreen /> */}
//       <App />
//     </ThemeProvider>
//   </Provider>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <Rakhal />,
  document.getElementById('root')
);
