import {configureStore} from '@reduxjs/toolkit'
import navOptionSlice from './features/navOptionSlice'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key :'root',
    version : 1,
    storage
}

const reducer = combineReducers({
    nav : navOptionSlice,
})
const persistedReducer = persistReducer(persistConfig,reducer)
export default configureStore(
    {
        reducer:persistedReducer
    }
)