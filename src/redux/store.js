
import contactsReducer from './reducer'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';


const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
    reducer:contactsReducer,
devTools: process.env.NODE_ENV === 'development',
middleware
})

export default store
