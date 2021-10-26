import { configureStore } from '@reduxjs/toolkit';
import api from './apiCall';
import reducer from './reducer';

const store = configureStore({
  reducer,
  middleware: (getmid) => getmid().concat(api),
});

export default store;
