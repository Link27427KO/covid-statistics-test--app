import { createSlice } from '@reduxjs/toolkit'
import CovidStatisticsService from '../../../services/covid-statistics.service'
import { ICountry, ICountryDialog, ICovid } from './covidTypes'

export type CovidState = {
    covid: ICountry[],
    countryDialog?: ICountryDialog
    covidLoading: boolean
    dialogVisible: boolean
    error?: any
}

const initialState: CovidState = {
    covid: [],
    covidLoading: false,
    dialogVisible: false
}
const covidSlice = createSlice({
    name: 'covid',
    initialState,
    reducers: {
        getCovidStatisticsRequest: (state: CovidState) => {
            state.covidLoading = true
        },
        getCovidStatisticsResponse: (state: CovidState, action) => {
            state.covid = action.payload.Countries
            state.covidLoading = false
        },
        getCovidStatisticsError: (state: CovidState, action) => {
            state.error = action.payload
            state.covidLoading = false
        },
        setCountryDialog: (state: CovidState, action) => {
            state.countryDialog = action.payload
        },
        setCountryDialogVisible: (state: CovidState, action) => {
            state.dialogVisible = action.payload
        }
    }
})

export const getCovidStatistics = () => {
    return async (dispatch: any) => {
        try {
            // @ts-ignore
            dispatch(getCovidStatisticsRequest())
            const res = await CovidStatisticsService.getCovidStatistics()
            console.log(res)
            if (!res) {
                // @ts-ignore
                dispatch(getCovidStatisticsError('error'))
            } else {
                // @ts-ignore
                dispatch(getCovidStatisticsResponse(res))
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const {
    getCovidStatisticsRequest,
    getCovidStatisticsResponse,
    getCovidStatisticsError,
    setCountryDialog,
    setCountryDialogVisible
} = covidSlice.actions

export default covidSlice.reducer