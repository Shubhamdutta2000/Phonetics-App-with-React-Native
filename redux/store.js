import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';

import translateReducer from './translate/translate.reducer';

const rootReducer = combineReducers({
    translateLanguage: translateReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
// const persistor = persistStore(store);

export { store };
