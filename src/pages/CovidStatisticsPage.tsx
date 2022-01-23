import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../modules/reducers/covid-statistics/covidSlice'
import {
    covidStatisticsLoadingSelector, covidStatisticsSelector
} from '../modules/reducers/covid-statistics/covidSelectors'
import { ICountry, ICountryDialog } from '../modules/reducers/covid-statistics/covidTypes'
import CovidDialogComponent from '../containers/covid/CovidDialogComponent'
import Table from '../components/table/Table'
import { normalizeCovidData } from '../helpers/functions'
import CovidHeader from '../containers/covid/CovidHeader'

const CovidStatisticsPage: FC = () => {
    const dispatch = useDispatch()
    const covid = useSelector(covidStatisticsSelector)
    const loading = useSelector(covidStatisticsLoadingSelector)
    const [covidArray, setCovidArray] = useState<ICountry[]>(covid)
    const handleOpen = (country: ICountryDialog) => {
        // @ts-ignore
        dispatch(actions.setCountryDialog(country))
        // @ts-ignore
        dispatch(actions.setCountryDialogVisible(true))
    }
    useEffect(() => {
        dispatch(actions.getCovidStatistics())
    }, [])
    useEffect(() => {
        if (covid) {
            setCovidArray(covid)
        }
    }, [covid])
    if (loading) {
        return <></>
    }

    const headerNames = {
        number: { name: '№' },
        Country: { name: 'Country' },
        TotalConfirmed: { name: 'Total Confirmed' },
    }
    const data = normalizeCovidData(covidArray)
    return (
        <div className='covid'>
            <CovidHeader covid={covid} setCovidArray={setCovidArray} />
            <div className='covid-table'>
                <Table
                    data={data}
                    headerNames={headerNames}
                    onRowClick={(index: number) => handleOpen({
                        TotalConfirmed: covidArray[index].TotalConfirmed,
                        Country: covidArray[index].Country,
                        TotalDeaths: covidArray[index].TotalDeaths,
                        TotalRecovered: covidArray[index].TotalRecovered
                    })}
                />
            </div>
            <CovidDialogComponent />
        </div>
    )
}

export default CovidStatisticsPage