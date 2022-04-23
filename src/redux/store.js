
import contactsReducer from './reducer'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { contactsApi } from './slice'



const middleware = [...getDefaultMiddleware(), logger, contactsApi.middleware]

const store = configureStore({
    reducer:{
        contacts: contactsReducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
devTools: process.env.NODE_ENV === 'development',
middleware,
})

export default store