import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducers from './contacts/contacts-reducer';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const contactPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
};

const store = configureStore({
    reducer: {
        contacts:  persistReducer(contactPersistConfig, contactReducers)
            },
    middleware: [...getDefaultMiddleware({
         serializableCheck: {
             ignoredActions: [   FLUSH,
                                 REHYDRATE,
                                 PAUSE,
                                 PERSIST,
                                 PURGE,
                                 REGISTER
             ]
     }
     }), logger],
    devTools: process.env.NODE_ENV === 'development'
    
});

const persistor = persistStore(store);

export default {persistor, store};