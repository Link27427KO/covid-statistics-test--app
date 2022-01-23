import { FC, useState } from 'react'
import { LogoImage } from '../../images/LogoImage'
import { SearchIcon } from '../../images/SearchIcon'
import { ICountry } from '../../modules/reducers/covid-statistics/covidTypes'

interface ICovidHeaderProps {
    covid: ICountry[]
    setCovidArray: (covid: ICountry[]) => void
}

const CovidHeader: FC<ICovidHeaderProps> = (props: ICovidHeaderProps) => {
    const { covid, setCovidArray } = props
    const [search, setSearch] = useState('')

    const searchHandler = () => {
        if (search && covid) {
            const newCovid = covid.filter((item) => item.Country.toLowerCase().includes(search.toLowerCase()))
            // // @ts-ignore
            setCovidArray(newCovid)
        } else {
            // @ts-ignore
            setCovidArray(covid)
        }
    }
    return (
        <div className='covid-header'>
            <div className='covid-header__logo'>
                <div className='covid-header__logo-image'>
                    <LogoImage />
                </div>
                <div className='covid-header__logo-title'>
                    <h1 className='covid-header__title'>STATISTIC</h1>
                </div>
            </div>
            <div>
                <div className='covid-header__search'>
                    <input
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                searchHandler()
                            }
                        }}
                        placeholder='Search..'
                        className='search-input'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    />
                    <SearchIcon
                        width={15}
                        height={15}
                        onClick={() => {
                            searchHandler()
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default CovidHeader