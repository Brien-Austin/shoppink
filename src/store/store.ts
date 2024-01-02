import {configureStore} from '@reduxjs/toolkit'
import navOptionSlice from './features/navOptionSlice'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import categorySlice from './features/categorySlice'

const persistConfig = {
    key :'root',
    version : 1,
    storage
}

const reducer = combineReducers({
    nav : navOptionSlice,
    category : categorySlice,
})
const persistedReducer = persistReducer(persistConfig,reducer)
export const store = configureStore(
    {
        reducer:persistedReducer
    }
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;