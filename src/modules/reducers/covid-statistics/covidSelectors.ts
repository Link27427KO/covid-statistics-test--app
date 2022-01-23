import { RootState } from '../../store'
import { ICountry, ICountryDialog } from './covidTypes'

// @ts-ignore
export const covidStatisticsSelector = (state: RootState) => state.covid.covid as ICountry[]
// @ts-ignore
export const countryDialogSelector = (state: RootState) => state.covid.countryDialog as ICountryDialog
// @ts-ignore
export const covidStatisticsLoadingSelector = (state: RootState) => state.covid.covidLoading as boolean
// @ts-ignore
export const countryDialogVisibleSelector = (state: RootState) => state.covid.dialogVisible as boolean
