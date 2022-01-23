import { configureStore, combineReducers } from '@reduxjs/toolkit'
import covidSlice from '../reducers/covid-statistics/covidSlice'

const rootReducer = combineReducers({
    covid: covidSlice
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
})
export default store