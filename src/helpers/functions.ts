import { ICountry } from '../modules/reducers/covid-statistics/covidTypes'

export const isScreenWidth = (width: number) => {
    return window.innerWidth < width
}

export const normalizeCovidData = (data: ICountry[]) => {
    let newData = []
    for (let i = 0; i < data.length; i++) {
        newData.push({
            number: i + 1,
            ...data[i]
        })
    }
    return newData
}