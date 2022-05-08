import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import translateReducer from './translate/translate.reducer';

// Configuration for storing all data locally to the app
const translateConfig = {
    key: 'translateLanguage',
    storage: AsyncStorage,
}

// Root Reducer contains all reducers of redux store
const rootReducer = combineReducers({
    translateLanguage: translateReducer
});

const persistedReducer = persistReducer(translateConfig, rootReducer)

// creating store
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

export { persistor, store };
